import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-illusion-600">В мире иллюзий</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-4 flex-1 mx-6">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Поиск иллюзий..."
              className="w-full pl-10"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/login">
            <Button variant="outline" size="sm" className="hidden md:flex gap-2">
              <User className="h-4 w-4" />
              Войти
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="hidden md:inline-flex">Регистрация</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
