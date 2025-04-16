import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export interface IllusionProps {
  id: string;
  title: string;
  description: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  likes: number;
  comments: number;
}

const IllusionCard = ({
  id,
  title,
  description,
  image,
  author,
  likes,
  comments,
}: IllusionProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <Link to={`/profile/${author.name}`} className="font-medium hover:underline">
              {author.name}
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Link to={`/illusion/${id}`}>
          <div className="relative overflow-hidden aspect-square">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            <p className="text-muted-foreground line-clamp-2">{description}</p>
          </div>
        </Link>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`gap-1 ${liked ? 'text-red-500' : ''}`}
            onClick={handleLike}
          >
            <Heart className={`h-5 w-5 ${liked ? 'fill-red-500' : ''}`} />
            <span>{likeCount}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <MessageCircle className="h-5 w-5" />
            <span>{comments}</span>
          </Button>
        </div>
        <Button variant="ghost" size="icon">
          <Share2 className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IllusionCard;
