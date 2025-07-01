
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Heart, MessageSquare, Image } from 'lucide-react';

const MyWritings = () => {
  const myWritings = [
    {
      id: 1,
      text: "오늘도 고생한 나에게 박수를 보낸다. 작은 성취라도 나에게는 큰 의미가 있다.",
      comment: "힘든 하루였지만 그래도 버텨냈다는 것에 감사합니다.",
      date: "2024-01-01",
      likes: 15,
      comments: 3,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      text: "꿈을 포기하지 않는 사람에게는 반드시 기회가 온다.",
      comment: "새해 첫날, 다시 한번 다짐해봅니다.",
      date: "2024-01-01",
      likes: 8,
      comments: 1,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      text: "감사는 마음의 기억이다.",
      comment: "오늘 하루도 감사한 마음으로 마무리합니다.",
      date: "2023-12-31",
      likes: 12,
      comments: 2,
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">내 필사 기록</h2>
        <p className="text-gray-600">지금까지 {myWritings.length}개의 필사를 작성하셨습니다</p>
      </div>

      <div className="grid gap-6">
        {myWritings.map((writing) => (
          <Card key={writing.id} className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <Badge variant="outline" className="bg-emerald-100 text-emerald-700 border-emerald-300">
                  <Calendar className="w-3 h-3 mr-1" />
                  {writing.date}
                </Badge>
                <div className="flex items-center space-x-3 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Heart className="w-4 h-4 mr-1 text-red-500" />
                    {writing.likes}
                  </span>
                  <span className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-1 text-blue-500" />
                    {writing.comments}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4">
                <blockquote className="text-gray-800 font-medium leading-relaxed text-center">
                  "{writing.text}"
                </blockquote>
              </div>
              
              {writing.image && (
                <div className="flex items-center justify-center bg-gray-100 rounded-lg p-8">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Image className="w-6 h-6" />
                    <span>필사 이미지</span>
                  </div>
                </div>
              )}
              
              {writing.comment && (
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700 italic">💭 {writing.comment}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyWritings;
