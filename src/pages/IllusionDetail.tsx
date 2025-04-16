import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { illusions } from "@/data/illusions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageCircle, Share2, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const IllusionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const illusion = illusions.find(item => item.id === id);
  
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(illusion?.likes || 0);
  const [commentText, setCommentText] = useState("");
  
  if (!illusion) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Иллюзия не найдена</h1>
          <p className="mb-8">Запрашиваемая иллюзия не существует или была удалена.</p>
          <Link to="/">
            <Button>Вернуться на главную</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      // В реальном приложении здесь был бы код для отправки комментария на сервер
      alert("Комментарий отправлен: " + commentText);
      setCommentText("");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад к иллюзиям
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-background rounded-lg overflow-hidden border">
              <div className="aspect-square md:aspect-[4/3] relative overflow-hidden">
                <img
                  src={illusion.image || "/placeholder.svg"}
                  alt={illusion.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold mb-2">{illusion.title}</h1>
              <p className="text-muted-foreground">{illusion.description}</p>
            </div>
            
            <div className="flex items-center gap-3 py-4 border-y">
              <Avatar>
                <AvatarImage src={illusion.author.avatar} alt={illusion.author.name} />
                <AvatarFallback>{illusion.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <Link to={`/profile/${illusion.author.name}`} className="font-medium hover:underline">
                  {illusion.author.name}
                </Link>
                <p className="text-sm text-muted-foreground">Автор</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="sm" 
                className={`gap-1 ${liked ? 'text-red-500' : ''}`}
                onClick={handleLike}
              >
                <Heart className={`h-5 w-5 ${liked ? 'fill-red-500' : ''}`} />
                <span>{likeCount}</span>
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <MessageCircle className="h-5 w-5" />
                <span>{illusion.comments}</span>
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Share2 className="h-5 w-5" />
                <span>Поделиться</span>
              </Button>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Добавить комментарий</h3>
              <form onSubmit={handleSubmitComment}>
                <Textarea
                  placeholder="Напишите ваш комментарий..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="mb-4"
                  rows={4}
                />
                <Button type="submit" disabled={!commentText.trim()}>
                  Отправить
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">Комментарии ({illusion.comments})</h2>
          <div className="space-y-4">
            {/* Здесь будут отображаться комментарии */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarFallback>КП</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">Константин П.</span>
                      <span className="text-xs text-muted-foreground">2 часа назад</span>
                    </div>
                    <p>Очень интересная иллюзия! Никогда такого раньше не видел.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarFallback>ОС</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">Ольга С.</span>
                      <span className="text-xs text-muted-foreground">4 часа назад</span>
                    </div>
                    <p>Я вижу это по-другому! Удивительно, как наш мозг может интерпретировать одно и то же изображение разными способами.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IllusionDetail;
