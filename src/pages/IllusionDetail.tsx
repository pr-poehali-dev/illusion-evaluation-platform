import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { illusions } from "@/data/illusions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageCircle, Share2, ArrowLeft, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Comment {
  id: string;
  author: {
    name: string;
    avatar?: string;
  };
  text: string;
  timeAgo: string;
}

// Демонстрационные комментарии
const demoComments: Record<string, Comment[]> = {
  "1": [
    {
      id: "1-1",
      author: { name: "Константин П." },
      text: "Очень интересная иллюзия! Если долго смотреть, действительно начинает казаться, что спираль вращается.",
      timeAgo: "2 часа назад"
    },
    {
      id: "1-2",
      author: { name: "Ольга С." },
      text: "Я вижу это по-другому! Удивительно, как наш мозг может интерпретировать одно и то же изображение разными способами.",
      timeAgo: "4 часа назад"
    }
  ],
  "2": [
    {
      id: "2-1",
      author: { name: "Дмитрий К." },
      text: "Куб Неккера - классика оптических иллюзий! Попробуйте сконцентрироваться на разных углах куба, и вы увидите, как меняется его ориентация.",
      timeAgo: "1 день назад"
    }
  ],
  "3": [
    {
      id: "3-1",
      author: { name: "Антон В." },
      text: "Отличный пример того, как контекст влияет на наше восприятие. Линии действительно одинаковые!",
      timeAgo: "3 часа назад"
    },
    {
      id: "3-2",
      author: { name: "Марина Т." },
      text: "Я измерила - они реально одинаковые. Но глазам своим до сих пор не верю!",
      timeAgo: "6 часов назад"
    },
    {
      id: "3-3",
      author: { name: "Профессор Н." },
      text: "Эта иллюзия демонстрирует, как мозг обрабатывает визуальную информацию в контексте. Стрелки создают ложное восприятие глубины.",
      timeAgo: "1 день назад"
    }
  ],
  "4": [
    {
      id: "4-1",
      author: { name: "Андрей П." },
      text: "Пытался нарисовать эту фигуру в 3D-редакторе... Не получается, конечно же! Вот это обман зрения.",
      timeAgo: "5 часов назад"
    }
  ],
  "5": [
    {
      id: "5-1",
      author: { name: "Кирилл З." },
      text: "Эта иллюзия просто великолепна! Вспоминается фильм «Начало» с его невозможной архитектурой.",
      timeAго: "1 день назад"
    },
    {
      id: "5-2",
      author: { name: "Светлана Е." },
      text: "У меня голова кружится, когда я долго смотрю на эту лестницу. Очень интересный эффект!",
      timeAgo: "3 дня назад"
    }
  ],
  "6": [
    {
      id: "6-1",
      author: { name: "Юлия Н." },
      text: "Классическая иллюзия! Интересно, что некоторые люди сначала видят вазу, а другие - сразу лица.",
      timeAgo: "7 часов назад"
    },
    {
      id: "6-2",
      author: { name: "Артем М." },
      text: "А я могу переключаться между вазой и лицами по желанию. Это как суперспособность!",
      timeAgo: "12 часов назад"
    }
  ]
};

// Дополнительная информация об иллюзиях
const illusionInfo = {
  "1": {
    history: "Спиральная иллюзия была популяризирована в 19 веке и стала одной из наиболее известных оптических иллюзий. Эта иллюзия основана на эффекте последовательного контраста и движения глаз при рассматривании спиральных линий.",
    howItWorks: "Иллюзия возникает из-за того, что наша зрительная система непрерывно отслеживает движение контрастных краев. Когда мы фиксируем взгляд на центре спирали, микродвижения глаз создают впечатление вращения.",
    tags: ["кинетическая иллюзия", "спираль", "движение"]
  },
  "2": {
    history: "Куб Неккера был впервые описан швейцарским кристаллографом Луи Альбертом Неккером в 1832 году. Он заметил эту оптическую иллюзию, рисуя кристаллы.",
    howItWorks: "Двусмысленность куба Неккера возникает из-за отсутствия визуальных подсказок о глубине. Мозг может интерпретировать нижнюю левую грань куба как находящуюся спереди или сзади, что приводит к переключению восприятия.",
    tags: ["геометрическая иллюзия", "глубина", "объем", "бистабильное изображение"]
  },
  "3": {
    history: "Иллюзия была впервые описана немецким психологом Францем Мюллером-Лайером в 1889 году. Эта иллюзия стала классическим примером того, как наше восприятие может быть обманчивым.",
    howItWorks: "Стрелки на концах линий создают контекст, который наш мозг интерпретирует как подсказки о глубине. Стрелки, направленные наружу, заставляют линию казаться длиннее, а направленные внутрь - короче.",
    tags: ["геометрическая иллюзия", "восприятие длины", "когнитивное искажение"]
  },
  "4": {
    history: "Невозможный треугольник, также известный как треугольник Пенроуза, был придуман шведским художником Оскаром Ройтерсвардом в 1934 году, но стал широко известен благодаря публикации в British Journal of Psychology математика Роджера Пенроуза в 1958 году.",
    howItWorks: "Иллюзия работает из-за того, что наш мозг пытается интерпретировать двумерное изображение как трёхмерный объект. Каждый угол треугольника в отдельности кажется реалистичным, но их комбинация создаёт фигуру, которая не может существовать в физическом мире.",
    tags: ["невозможная фигура", "парадокс", "геометрическая иллюзия"]
  },
  "5": {
    history: "Лестница Пенроуза была создана отцом и сыном Лайонелом и Роджером Пенроузами в 1950-х годах. Эта иллюзия стала ещё более популярной после того, как нидерландский художник М.К. Эшер использовал её в своей знаменитой литографии «Восхождение и спуск».",
    howItWorks: "Лестница создаёт впечатление непрерывного подъема (или спуска), даже при полном обходе контура. Это происходит из-за локально правдоподобных переходов, которые в совокупности образуют глобально невозможную структуру.",
    tags: ["невозможная фигура", "бесконечность", "архитектурная иллюзия"]
  },
  "6": {
    history: "Вазочка Рубина (или профили-ваза) была разработана датским психологом Эдгаром Рубином около 1915 года. Она стала одним из самых известных примеров фигуры-фона в гештальт-психологии.",
    howItWorks: "Иллюзия основана на принципе фигуры и фона. Наш мозг может воспринимать только одну интерпретацию за раз: либо мы видим белую вазу на черном фоне, либо два черных профиля лица на белом фоне, но не оба образа одновременно.",
    tags: ["фигура-фон", "двойственное изображение", "гештальт", "переключение восприятия"]
  }
};

const IllusionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const illusion = illusions.find(item => item.id === id);
  
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(illusion?.likes || 0);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const info = id ? illusionInfo[id as keyof typeof illusionInfo] : undefined;
  
  // Загрузка комментариев
  useEffect(() => {
    if (id && demoComments[id]) {
      setComments(demoComments[id]);
    } else {
      setComments([]);
    }
  }, [id]);

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
      const newComment: Comment = {
        id: `new-${Date.now()}`,
        author: { name: "Вы" },
        text: commentText,
        timeAgo: "только что"
      };
      setComments([newComment, ...comments]);
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
              <div className="aspect-square lg:aspect-[4/3] relative overflow-hidden">
                <img
                  src={illusion.image || "/placeholder.svg"}
                  alt={illusion.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h1 className="text-2xl font-bold">{illusion.title}</h1>
                <p className="text-muted-foreground mt-2">{illusion.description}</p>
                
                <div className="flex items-center gap-3 py-4 mt-2">
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
                
                <div className="flex items-center gap-4 mt-2">
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
                    <span>{comments.length}</span>
                  </Button>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Share2 className="h-5 w-5" />
                          <span>Поделиться</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Скопировать ссылку на иллюзию</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>

            {info && (
              <Card className="mt-6">
                <CardContent className="pt-6">
                  <Tabs defaultValue="about">
                    <TabsList className="mb-4">
                      <TabsTrigger value="about">Об иллюзии</TabsTrigger>
                      <TabsTrigger value="how">Как это работает</TabsTrigger>
                    </TabsList>
                    <TabsContent value="about" className="space-y-4">
                      <div className="flex items-start gap-2">
                        <Info className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <p>{info.history}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {info.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="how">
                      <p>{info.howItWorks}</p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
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
              </CardContent>
            </Card>
            
            <div>
              <h2 className="text-xl font-bold mb-4">Комментарии ({comments.length})</h2>
              <div className="space-y-4">
                {comments.length > 0 ? (
                  comments.map((comment) => (
                    <Card key={comment.id}>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <Avatar>
                            <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                            <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium">{comment.author.name}</span>
                              <span className="text-xs text-muted-foreground">{comment.timeAgo}</span>
                            </div>
                            <p>{comment.text}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <p className="text-center text-muted-foreground py-4">Пока нет комментариев. Будьте первым!</p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-10" />
        
        <h2 className="text-2xl font-bold mb-6">Другие иллюзии</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {illusions
            .filter(item => item.id !== id)
            .slice(0, 3)
            .map(item => (
              <Card key={item.id} className="overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image || "/placeholder.svg"} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1 line-clamp-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{item.description}</p>
                  <Link to={`/illusion/${item.id}`}>
                    <Button variant="outline" size="sm" className="w-full">Посмотреть</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IllusionDetail;
