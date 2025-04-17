import { IllusionProps } from "@/components/IllusionCard";

export const illusions: IllusionProps[] = [
  {
    id: "1",
    title: "Спиральная иллюзия",
    description: "Классическая спиральная иллюзия, которая создает впечатление вращения, хотя изображение статично.",
    image: "https://images.unsplash.com/photo-1590581296996-c7ee84d9df2b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Движение",
    likes: 42,
    dateAdded: "2023-10-15",
    author: {
      name: "Александр Петров",
      avatar: "https://i.pravatar.cc/150?u=alex"
    }
  },
  {
    id: "2",
    title: "Куб Неккера",
    description: "Куб Неккера — оптическая иллюзия, которая может восприниматься двояко. Ваш мозг постоянно переключается между двумя интерпретациями.",
    image: "https://images.unsplash.com/photo-1565706107018-d375faa6353f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Геометрия",
    likes: 28,
    dateAdded: "2023-11-20",
    author: {
      name: "Екатерина Смирнова",
      avatar: "https://i.pravatar.cc/150?u=kate"
    }
  },
  {
    id: "3",
    title: "Иллюзия Мюллера-Лайера",
    description: "В этой иллюзии две линии одинаковой длины кажутся разными из-за стрелок на их концах.",
    image: "https://images.unsplash.com/photo-1469050624938-45886168cb3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Восприятие",
    likes: 95,
    dateAdded: "2023-08-05",
    author: {
      name: "Иван Кузнецов",
      avatar: "https://i.pravatar.cc/150?u=ivan"
    }
  },
  {
    id: "4",
    title: "Невозможный треугольник",
    description: "Невозможный треугольник, или треугольник Пенроуза, — фигура, которая не может существовать в трехмерном пространстве.",
    image: "https://images.unsplash.com/photo-1644219551948-347690797f35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Парадокс",
    likes: 67,
    dateAdded: "2023-12-10",
    author: {
      name: "Мария Иванова",
      avatar: "https://i.pravatar.cc/150?u=maria"
    }
  },
  {
    id: "5",
    title: "Лестница Пенроуза",
    description: "Лестница Пенроуза — невозможная фигура, создающая иллюзию бесконечного подъема или спуска.",
    image: "https://images.unsplash.com/photo-1574492516850-62464fc99979?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Архитектура",
    likes: 84,
    dateAdded: "2024-01-15",
    author: {
      name: "Сергей Волков",
      avatar: "https://i.pravatar.cc/150?u=sergey"
    }
  },
  {
    id: "6",
    title: "Ваза Рубина",
    description: "Классическая иллюзия, где можно увидеть либо вазу, либо два лица в профиль, но не одновременно.",
    image: "https://images.unsplash.com/photo-1629075573238-209cda7fd44e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Фигура-фон",
    likes: 51,
    dateAdded: "2024-02-20",
    author: {
      name: "Ольга Новикова",
      avatar: "https://i.pravatar.cc/150?u=olga"
    }
  }
];
