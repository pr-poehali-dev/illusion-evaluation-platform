import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IllusionGrid from "@/components/IllusionGrid";
import type { IllusionProps } from "@/components/IllusionCard";

interface IllusionTabsProps {
  illusions: IllusionProps[];
}

const IllusionTabs = ({ illusions }: IllusionTabsProps) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  
  // Загрузка избранных иллюзий из localStorage при инициализации
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteIllusions");
    if (savedFavorites) {
      setFavoriteIds(JSON.parse(savedFavorites));
    }
  }, []);

  // Получаем популярные иллюзии (с наибольшим количеством лайков)
  const popularIllusions = [...illusions]
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 6);
  
  // Получаем избранные иллюзии пользователя
  const favoriteIllusions = illusions.filter(illusion => 
    favoriteIds.includes(illusion.id)
  );
  
  // Получаем недавние иллюзии (сортировка по дате, если она есть, или просто берем последние добавленные)
  const recentIllusions = [...illusions]
    .sort((a, b) => {
      const dateA = a.dateAdded ? new Date(a.dateAdded).getTime() : 0;
      const dateB = b.dateAdded ? new Date(b.dateAdded).getTime() : 0;
      return dateB - dateA;
    })
    .slice(0, 6);

  return (
    <Tabs defaultValue="all" className="mb-8">
      <TabsList className="mb-6">
        <TabsTrigger value="all">Все иллюзии</TabsTrigger>
        <TabsTrigger value="popular">Популярные</TabsTrigger>
        <TabsTrigger value="favorites">
          Избранное {favoriteIllusions.length > 0 && `(${favoriteIllusions.length})`}
        </TabsTrigger>
        <TabsTrigger value="recent">Недавние</TabsTrigger>
      </TabsList>
      
      <TabsContent value="all">
        <IllusionGrid illusions={illusions} />
      </TabsContent>
      
      <TabsContent value="popular">
        {popularIllusions.length > 0 ? (
          <IllusionGrid illusions={popularIllusions} />
        ) : (
          <p className="text-center text-muted-foreground py-12">
            Пока нет популярных иллюзий.
          </p>
        )}
      </TabsContent>
      
      <TabsContent value="favorites">
        {favoriteIllusions.length > 0 ? (
          <IllusionGrid illusions={favoriteIllusions} />
        ) : (
          <p className="text-center text-muted-foreground py-12">
            У вас пока нет избранных иллюзий. Добавляйте их, нажимая на звездочку.
          </p>
        )}
      </TabsContent>
      
      <TabsContent value="recent">
        {recentIllusions.length > 0 ? (
          <IllusionGrid illusions={recentIllusions} />
        ) : (
          <p className="text-center text-muted-foreground py-12">
            Пока нет недавно добавленных иллюзий.
          </p>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default IllusionTabs;
