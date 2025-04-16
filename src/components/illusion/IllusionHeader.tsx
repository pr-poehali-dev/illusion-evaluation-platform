import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IllusionProps } from "@/components/IllusionCard";

interface IllusionHeaderProps {
  illusion: IllusionProps;
  commentCount: number;
  liked: boolean;
  likeCount: number;
  onLike: () => void;
}

const IllusionHeader = ({
  illusion,
  commentCount,
  liked,
  likeCount,
  onLike
}: IllusionHeaderProps) => {
  return (
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
            onClick={onLike}
          >
            <Heart className={`h-5 w-5 ${liked ? 'fill-red-500' : ''}`} />
            <span>{likeCount}</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <MessageCircle className="h-5 w-5" />
            <span>{commentCount}</span>
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
  );
};

export default IllusionHeader;
