import { Comment } from "@/types/illusion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CommentListProps {
  comments: Comment[];
}

const CommentItem = ({ comment }: { comment: Comment }) => {
  return (
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
  );
};

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Комментарии ({comments.length})</h2>
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))
        ) : (
          <p className="text-center text-muted-foreground py-4">Пока нет комментариев. Будьте первым!</p>
        )}
      </div>
    </div>
  );
};

export default CommentList;
