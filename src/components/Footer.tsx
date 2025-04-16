import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-illusion-600 mb-4">В мире иллюзий</h3>
            <p className="text-muted-foreground">
              Социальная сеть, где пользователи могут делиться и оценивать удивительные оптические иллюзии.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-muted-foreground hover:text-foreground">
                  Исследовать
                </Link>
              </li>
              <li>
                <Link to="/popular" className="text-muted-foreground hover:text-foreground">
                  Популярное
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} В мире иллюзий. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
