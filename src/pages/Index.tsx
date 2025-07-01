
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Heart, Plus, Vote, BookOpen, Calendar, Star } from 'lucide-react';
import TodaysSentence from '@/components/TodaysSentence';
import MyWritings from '@/components/MyWritings';
import CommunityFeed from '@/components/CommunityFeed';
import VotingBox from '@/components/VotingBox';
import UploadModal from '@/components/UploadModal';

const Index = () => {
  const [activeTab, setActiveTab] = useState('today');
  const [showUploadModal, setShowUploadModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  필사의 정원
                </h1>
                <p className="text-sm text-gray-600">마음을 담아 쓰는 하루</p>
              </div>
            </div>
            <Button 
              onClick={() => setShowUploadModal(true)}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg"
            >
              <Plus className="w-4 h-4 mr-2" />
              필사 올리기
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/70 backdrop-blur-sm">
            <TabsTrigger value="today" className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>오늘의 문장</span>
            </TabsTrigger>
            <TabsTrigger value="my" className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>내 필사</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>모든 필사</span>
            </TabsTrigger>
            <TabsTrigger value="vote" className="flex items-center space-x-2">
              <Vote className="w-4 h-4" />
              <span>투표함</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="today" className="animate-fade-in">
            <TodaysSentence />
          </TabsContent>

          <TabsContent value="my" className="animate-fade-in">
            <MyWritings />
          </TabsContent>

          <TabsContent value="community" className="animate-fade-in">
            <CommunityFeed />
          </TabsContent>

          <TabsContent value="vote" className="animate-fade-in">
            <VotingBox />
          </TabsContent>
        </Tabs>
      </main>

      {/* Upload Modal */}
      <UploadModal 
        isOpen={showUploadModal} 
        onClose={() => setShowUploadModal(false)} 
      />
    </div>
  );
};

export default Index;
