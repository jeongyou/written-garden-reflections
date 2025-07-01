
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Camera, X, Check } from 'lucide-react';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadModal = ({ isOpen, onClose }: UploadModalProps) => {
  const [sentence, setSentence] = useState('');
  const [comment, setComment] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [step, setStep] = useState(1);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = () => {
    // Here would be the actual upload logic
    setStep(3);
    setTimeout(() => {
      onClose();
      resetForm();
    }, 2000);
  };

  const resetForm = () => {
    setSentence('');
    setComment('');
    setImage(null);
    setStep(1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-gray-800">
            {step === 1 && '✍️ 필사 작성하기'}
            {step === 2 && '📸 사진 업로드하기'}
            {step === 3 && '🎉 업로드 완료!'}
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sentence">필사할 문장</Label>
              <Textarea
                id="sentence"
                placeholder="필사하고 싶은 문장을 입력해주세요..."
                value={sentence}
                onChange={(e) => setSentence(e.target.value)}
                className="min-h-[100px] resize-none"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="comment">한줄 코멘트 (선택사항)</Label>
              <Input
                id="comment"
                placeholder="이 문장에 대한 생각을 간단히 남겨주세요"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={onClose}>
                취소
              </Button>
              <Button 
                onClick={() => setStep(2)}
                disabled={!sentence.trim()}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
              >
                다음 단계
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-4">
                <blockquote className="text-center font-medium text-gray-800 italic">
                  "{sentence}"
                </blockquote>
                {comment && (
                  <p className="text-sm text-gray-600 text-center mt-2">
                    💭 {comment}
                  </p>
                )}
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Label>필사 사진 업로드</Label>
              
              {!image ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-amber-400 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer flex flex-col items-center space-y-2"
                  >
                    <Camera className="w-12 h-12 text-gray-400" />
                    <p className="text-gray-600">사진을 선택하세요</p>
                    <p className="text-xs text-gray-500">
                      또는 여기를 클릭하여 업로드
                    </p>
                  </label>
                </div>
              ) : (
                <div className="relative">
                  <Card className="bg-gray-50">
                    <CardContent className="p-4 text-center">
                      <Upload className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        {image.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(image.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </CardContent>
                  </Card>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setImage(null)}
                    className="absolute -top-2 -right-2 w-6 h-6 p-0 rounded-full"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              )}
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={() => setStep(1)}>
                이전
              </Button>
              <Button 
                onClick={handleSubmit}
                disabled={!image}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
              >
                <Upload className="w-4 h-4 mr-2" />
                업로드
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center space-y-4 py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              필사가 성공적으로 업로드되었습니다!
            </h3>
            <p className="text-gray-600 text-sm">
              다른 사람들이 당신의 아름다운 필사를 감상할 수 있어요
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UploadModal;
