import { useState, useEffect } from "react";
import { IllusionProps } from "@/components/IllusionCard";
import { Comment } from "@/types/illusion";
import { demoComments, illusionInfo } from "@/data/illusion-details";

interface UseIllusionReturn {
  liked: boolean;
  likeCount: number;
  comments: Comment[];
  handleLike: () => void;
  handleSubmitComment: (text: string) => void;
  info: typeof illusionInfo[keyof typeof illusionInfo] | undefined;
}

export const useIllusion = (illusion: IllusionProps | undefined, id: string | undefined): UseIllusionReturn => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(illusion?.likes || 0);
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

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const handleSubmitComment = (text: string) => {
    if (text.trim()) {
      // В реальном приложении здесь был бы код для отправки комментария на сервер
      const newComment: Comment = {
        id: `new-${Date.now()}`,
        author: { name: "Вы" },
        text,
        timeAgo: "только что"
      };
      setComments([newComment, ...comments]);
    }
  };

  return {
    liked,
    likeCount,
    comments,
    handleLike,
    handleSubmitComment,
    info
  };
};
