import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IllusionCard from "@/components/IllusionCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { illusions } from "@/data/illusions";
import { Sparkles, TrendingUp, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-8">
        <section className="mb-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4 text-illusion-600">В мире иллюзий</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Откройте для себя удивительные оптические иллюзии и поделитесь своими впечатлениями
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-illusion-600 hover:bg-illusion-700">
                Исследовать иллюзии
              </Button>
              <Button size="lg" variant="outline">
                Загрузить свою иллюзию
              </Button>
            </div>
          </div>
        </section>

        <section>
          <Tabs defaultValue="popular" className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Исследуйте иллюзии</h2>
              <TabsList>
                <TabsTrigger value="popular" className="gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span className="hidden sm:inline">Популярные</span>
                </TabsTrigger>
                <TabsTrigger value="new" className="gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="hidden sm:inline">Новые</span>
                </TabsTrigger>
                <TabsTrigger value="featured" className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  <span className="hidden sm:inline">Избранные</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="popular" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {illusions.map((illusion) => (
                  <IllusionCard key={illusion.id} {...illusion} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="new" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...illusions].reverse().map((illusion) => (
                  <IllusionCard key={illusion.id} {...illusion} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="featured" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {illusions.slice(0, 3).map((illusion) => (
                  <IllusionCard key={illusion.id} {...illusion} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg">
              Показать больше
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
