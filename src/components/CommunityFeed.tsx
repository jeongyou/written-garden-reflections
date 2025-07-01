
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Heart, MessageSquare, User, Image } from 'lucide-react';

const CommunityFeed = () => {
  const communityPosts = [
    {
      id: 1,
      author: "따뜻한마음",
      text: "인생은 짧지만 예술은 길다. 오늘도 아름다운 것을 만들어가자.",
      comment: "오늘 미술관에서 본 작품에 감동받아 필사해봤어요",
      date: "2024-01-01",
      likes: 24,
      comments: 7,
      isLiked: false,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      author: "글씨사랑",
      text: "책을 읽는다는 것은 다른 사람의 생각을 빌려 자신의 생각을 만드는 일이다.",
      comment: "독서의 즐거움을 다시 한번 느끼게 해준 문장입니다",
      date: "2024-01-01",
      likes: 31,
      comments: 12,
      isLiked: true,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      author: "차분한하루",
      text: "모든 순간이 선물이다. 오늘 하루도 감사히 받아들이자.",
      comment: "바쁜 일상 속에서도 잠시 멈춰 서게 만드는 문장이네요",
      date: "2023-12-31",
      likes: 18,
      comments: 5,
      isLiked: false,
      image: "/placeholder.svg"
    },
    {
      id: 4,
      author: "새벽필사",
      text: "꿈을 꾸는 것은 계획을 세우는 것, 계획을 실행하는 것은 꿈을 이루는 것이다.",
      comment: "새해 계획을 세우며 다짐하는 마음으로 썼습니다",
      date: "2023-12-31",
      likes: 42,
      comments: 15,
      isLiked: true,
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">모든 필사</h2>
        <p className="text-gray-600">다른 사람들의 아름다운 필사를 감상해보세요</p>
      </div>

      <div className="grid gap-6">
        {communityPosts.map((post) => (
          <Card key={post.id} className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{post.author}</h3>
                    <p className="text-xs text-gray-500 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4">
                <blockquote className="text-gray-800 font-medium leading-relaxed text-center">
                  "{post.text}"
                </blockquote>
              </div>
              
              {post.image && (
                <div className="flex items-center justify-center bg-gray-100 rounded-lg p-8">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Image className="w-6 h-6" />
                    <span>필사 이미지</span>
                  </div>
                </div>
              )}
              
              {post.comment && (
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700 italic">💭 {post.comment}</p>
                </div>
              )}
              
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`${post.isLiked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500`}
                  >
                    <Heart className={`w-4 h-4 mr-1 ${post.isLiked ? 'fill-current' : ''}`} />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-500">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    {post.comments}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommunityFeed;
