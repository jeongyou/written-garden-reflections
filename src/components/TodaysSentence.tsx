
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Star, Heart, Share2 } from 'lucide-react';

const TodaysSentence = () => {
  const todaySentence = {
    text: "행복은 결과가 아니라 과정이다. 그리고 그 과정에서 우리는 매일 조금씩 성장한다.",
    author: "익명의 필사자",
    date: "2024년 1월 1일",
    votes: 127
  };

  return (
    <div className="space-y-6">
      {/* Today's Featured Sentence */}
      <Card className="bg-gradient-to-br from-amber-100 to-orange-100 border-amber-200 shadow-lg">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Star className="w-5 h-5 text-amber-500" />
            <CardTitle className="text-xl text-amber-800">오늘의 문장</CardTitle>
            <Star className="w-5 h-5 text-amber-500" />
          </div>
          <Badge variant="secondary" className="bg-amber-200 text-amber-800 mx-auto">
            <Calendar className="w-3 h-3 mr-1" />
            {todaySentence.date}
          </Badge>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <blockquote className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed px-4">
            "{todaySentence.text}"
          </blockquote>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <span>— {todaySentence.author}</span>
            <Badge variant="outline" className="bg-white/50">
              <Heart className="w-3 h-3 mr-1 text-red-500" />
              {todaySentence.votes}표
            </Badge>
          </div>
          <div className="flex justify-center space-x-3 mt-6">
            <Button variant="outline" className="bg-white/50 hover:bg-white/70">
              <Heart className="w-4 h-4 mr-2" />
              공감하기
            </Button>
            <Button variant="outline" className="bg-white/50 hover:bg-white/70">
              <Share2 className="w-4 h-4 mr-2" />
              공유하기
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Writing Prompt */}
      <Card className="bg-white/70 backdrop-blur-sm shadow-md">
        <CardHeader>
          <CardTitle className="text-lg text-gray-800">✍️ 필사 가이드</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">📝 필사 팁</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• 천천히, 한 글자씩 정성스럽게</li>
                <li>• 문장의 의미를 생각하며 써보세요</li>
                <li>• 자신만의 스타일로 표현해보세요</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700">📸 사진 업로드</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• 자연광에서 촬영하면 더 예뻐요</li>
                <li>• 전체 문장이 잘 보이도록 찍어주세요</li>
                <li>• 간단한 코멘트도 함께 남겨보세요</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodaysSentence;
