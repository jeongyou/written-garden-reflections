
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Vote, Clock, Trophy, Star } from 'lucide-react';

const VotingBox = () => {
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedSentence, setSelectedSentence] = useState<number | null>(null);

  const votingOptions = [
    {
      id: 1,
      text: "성공은 실패를 딛고 일어서는 것이다. 포기하지 않는 한 실패는 없다.",
      author: "희망가득",
      votes: 34,
      percentage: 42
    },
    {
      id: 2,
      text: "오늘의 작은 노력이 내일의 큰 변화를 만든다.",
      author: "꾸준함",
      votes: 28,
      percentage: 35
    },
    {
      id: 3,
      text: "행복은 무엇을 가지고 있느냐가 아니라 무엇을 느끼고 있느냐에 달려있다.",
      author: "감사하는마음",
      votes: 18,
      percentage: 23
    }
  ];

  const totalVotes = votingOptions.reduce((sum, option) => sum + option.votes, 0);

  const handleVote = (id: number) => {
    if (!hasVoted) {
      setSelectedSentence(id);
      setHasVoted(true);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">투표함</h2>
        <p className="text-gray-600">내일의 '오늘의 문장'을 함께 선택해주세요</p>
      </div>

      {/* Voting Status */}
      <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Clock className="w-5 h-5 text-emerald-600" />
            <CardTitle className="text-lg text-emerald-800">투표 현황</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-2">
          <div className="text-2xl font-bold text-emerald-800">{totalVotes}표</div>
          <p className="text-sm text-emerald-600">현재까지 참여한 투표 수</p>
          <Badge variant="outline" className="bg-emerald-100 text-emerald-700 border-emerald-300">
            <Trophy className="w-3 h-3 mr-1" />
            자정에 결과 발표
          </Badge>
        </CardContent>
      </Card>

      {/* Voting Options */}
      <div className="space-y-4">
        {votingOptions.map((option) => (
          <Card 
            key={option.id} 
            className={`cursor-pointer transition-all duration-300 ${
              selectedSentence === option.id 
                ? 'ring-2 ring-emerald-400 bg-emerald-50/50' 
                : 'bg-white/80 hover:bg-white/90'
            } ${hasVoted ? 'cursor-default' : 'hover:shadow-lg'}`}
            onClick={() => handleVote(option.id)}
          >
            <CardContent className="p-6 space-y-4">
              <blockquote className="text-gray-800 font-medium leading-relaxed">
                "{option.text}"
              </blockquote>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">— {option.author}</span>
                <Badge variant="outline" className="bg-gray-50">
                  <Vote className="w-3 h-3 mr-1" />
                  {option.votes}표
                </Badge>
              </div>

              {hasVoted && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">투표율: {option.percentage}%</span>
                    {selectedSentence === option.id && (
                      <Badge className="bg-emerald-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        내 선택
                      </Badge>
                    )}
                  </div>
                  <Progress value={option.percentage} className="h-2" />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Vote Button */}
      {!hasVoted && (
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            하루에 한 번만 투표할 수 있습니다
          </p>
          <Button 
            disabled={!selectedSentence}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
          >
            <Vote className="w-4 h-4 mr-2" />
            투표하기
          </Button>
        </div>
      )}

      {hasVoted && (
        <Card className="bg-green-50 border-green-200">
          <CardContent className="text-center py-4">
            <p className="text-green-800 font-medium">
              🎉 투표가 완료되었습니다! 내일 자정에 결과를 확인해보세요.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default VotingBox;
