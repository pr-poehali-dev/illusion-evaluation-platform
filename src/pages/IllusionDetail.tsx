import { useParams, Link } from "react-router-dom";
import { illusions } from "@/data/illusions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { useIllusion } from "@/hooks/useIllusion";

// Компоненты иллюзии
import IllusionHeader from "@/components/illusion/IllusionHeader";
import IllusionInfoTabs from "@/components/illusion/IllusionInfo";
import CommentForm from "@/components/illusion/CommentForm";
import CommentList from "@/components/illusion/CommentList";
import RelatedIllusions from "@/components/illusion/RelatedIllusions";
import IllusionNotFound from "@/components/illusion/IllusionNotFound";

const IllusionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const illusion = illusions.find(item => item.id === id);
  
  const {
    liked,
    likeCount,
    comments,
    handleLike,
    handleSubmitComment,
    info
  } = useIllusion(illusion, id);

  if (!illusion) {
    return <IllusionNotFound />;
  }

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
            {/* Основная информация об иллюзии */}
            <IllusionHeader 
              illusion={illusion}
              commentCount={comments.length}
              liked={liked}
              likeCount={likeCount}
              onLike={handleLike}
            />

            {/* Дополнительная информация */}
            {info && <IllusionInfoTabs info={info} />}
          </div>
          
          <div className="space-y-6">
            {/* Форма комментария */}
            <CommentForm onSubmitComment={handleSubmitComment} />
            
            {/* Список комментариев */}
            <CommentList comments={comments} />
          </div>
        </div>
        
        <Separator className="my-10" />
        
        {/* Похожие иллюзии */}
        <RelatedIllusions illusions={illusions} currentId={id} />
      </main>
      <Footer />
    </div>
  );
};

export default IllusionDetail;
