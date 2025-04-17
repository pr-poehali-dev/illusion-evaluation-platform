import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star } from "lucide-react";

export interface IllusionProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  category?: string;
  likes?: number;
  dateAdded?: string;
  author: {
    name: string;
    avatar?: string;
  };
}

const IllusionCard = (props: IllusionProps) => {
  const { id, title, description, image, category, likes = 0 } = props;
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Проверить, находится ли иллюзия в избранном при загрузке компонента
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteIllusions");
    if (savedFavorites) {
      const favorites = JSON.parse(savedFavorites) as string[];
      setIsFavorite(favorites.includes(id));
    }
  }, [id]);
  
  // Обработчик нажатия на звездочку (добавление/удаление из избранного)
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault(); // Предотвращаем переход по ссылке
    
    // Получаем текущий список избранного из localStorage
    const savedFavorites = localStorage.getItem("favoriteIllusions");
    let favorites: string[] = savedFavorites ? JSON.parse(savedFavorites) : [];
    
    // Добавляем или удаляем id из списка избранного
    if (isFavorite) {
      favorites = favorites.filter(favId => favId !== id);
    } else {
      favorites.push(id);
    }
    
    // Сохраняем обновленный список в localStorage
    localStorage.setItem("favoriteIllusions", JSON.stringify(favorites));
    
    // Обновляем состояние
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/illusion/${id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-md">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img 
            src={image || "/placeholder.svg"} 
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          
          {/* Кнопка добавления в избранное */}
          <button 
            className="absolute top-2 right-2 p-1 rounded-full bg-background/80 hover:bg-background transition-colors"
            onClick={handleToggleFavorite}
          >
            <Star 
              className={`h-5 w-5 ${isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
            />
          </button>
          
          {category && (
            <div className="absolute top-2 left-2">
              <Badge variant="secondary" className="bg-background/80">
                {category}
              </Badge>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold line-clamp-1">{title}</h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <Heart className="h-4 w-4 mr-1" /> {likes}
            </div>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>
          <Button variant="outline" size="sm" className="w-full">Подробнее</Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default IllusionCard;
