import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IllusionCard from "@/components/IllusionCard";
import { illusions } from "@/data/illusions";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-12">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Галерея оптических иллюзий</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Исследуйте удивительный мир оптических иллюзий, которые обманывают ваш мозг и бросают вызов вашему восприятию реальности.
          </p>
        </section>
        
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {illusions.map((illusion) => (
              <IllusionCard key={illusion.id} {...illusion} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
