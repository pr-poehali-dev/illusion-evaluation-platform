import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

interface CommentFormProps {
  onSubmitComment: (text: string) => void;
}

const CommentForm = ({ onSubmitComment }: CommentFormProps) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      onSubmitComment(commentText);
      setCommentText("");
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="font-medium mb-4">Добавить комментарий</h3>
        <form onSubmit={handleSubmit}>
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
  );
};

export default CommentForm;
