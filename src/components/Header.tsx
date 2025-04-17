import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo-b.svg" alt="Иллюзиум" className="h-8 w-8" />
            <span className="hidden font-bold sm:inline-block">Иллюзиум</span>
          </Link>

          {!isMobile && (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Категории</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/?category=optical"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Оптические</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Иллюзии, обманывающие зрение
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/?category=cognitive"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Когнитивные</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Иллюзии, связанные с восприятием и мышлением
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/?category=auditory"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Слуховые</div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Иллюзии, обманывающие слух
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    О проекте
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Контакты
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>

        <div className="flex items-center gap-4">
          {!isMobile && (
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Поиск иллюзий..."
                className="w-[200px] lg:w-[300px] pl-8"
              />
            </div>
          )}

          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Открыть меню</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link to="/" className="text-lg font-medium">
                    Главная
                  </Link>
                  <Link to="/?category=optical" className="text-lg font-medium">
                    Оптические иллюзии
                  </Link>
                  <Link to="/?category=cognitive" className="text-lg font-medium">
                    Когнитивные иллюзии
                  </Link>
                  <Link to="/?category=auditory" className="text-lg font-medium">
                    Слуховые иллюзии
                  </Link>
                  <Link to="/about" className="text-lg font-medium">
                    О проекте
                  </Link>
                  <Link to="/contact" className="text-lg font-medium">
                    Контакты
                  </Link>
                  <div className="relative mt-4">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Поиск иллюзий..."
                      className="pl-8"
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <Link to="/login">
                      <Button variant="default" className="w-full">
                        Войти
                      </Button>
                    </Link>
                    <Link to="/register">
                      <Button variant="outline" className="w-full">
                        Регистрация
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="default">Войти</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline">
                  <User className="mr-2 h-4 w-4" />
                  Регистрация
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
