import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IllusionNotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Иллюзия не найдена</h1>
        <p className="mb-8">Запрашиваемая иллюзия не существует или была удалена.</p>
        <Link to="/">
          <Button>Вернуться на главную</Button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default IllusionNotFound;
