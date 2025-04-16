import { Link } from "react-router-dom";
import { IllusionProps } from "@/components/IllusionCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface RelatedIllusionsProps {
  illusions: IllusionProps[];
  currentId: string;
}

const RelatedIllusions = ({ illusions, currentId }: RelatedIllusionsProps) => {
  const filteredIllusions = illusions
    .filter(item => item.id !== currentId)
    .slice(0, 3);

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Другие иллюзии</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIllusions.map(item => (
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
    </>
  );
};

export default RelatedIllusions;
