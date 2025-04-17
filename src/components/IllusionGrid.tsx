import IllusionCard from "@/components/IllusionCard";
import type { IllusionProps } from "@/components/IllusionCard";

interface IllusionGridProps {
  illusions: IllusionProps[];
}

const IllusionGrid = ({ illusions }: IllusionGridProps) => {
  if (illusions.length === 0) {
    return (
      <div className="py-12 text-center text-muted-foreground">
        Иллюзии не найдены
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {illusions.map((illusion) => (
        <IllusionCard key={illusion.id} {...illusion} />
      ))}
    </div>
  );
};

export default IllusionGrid;
