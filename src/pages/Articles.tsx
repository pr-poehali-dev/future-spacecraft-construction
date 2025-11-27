import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Квантовая запутанность и будущее космических путешествий",
      description: "Как использование квантовой механики может изменить наше понимание межзвёздных перелётов",
      image: "https://cdn.poehali.dev/projects/f092b6ec-5c0f-410b-bd08-760c94eff213/files/3b3df169-55a2-4a21-916d-24e96a48709f.jpg",
      date: "15 ноября 2024",
      readTime: "8 мин",
      category: "Наука",
      excerpt: "Квантовая запутанность — одно из самых загадочных явлений в физике. Учёные SpaceShip Corp исследуют возможность применения этого феномена для создания принципиально новых двигательных систем, способных преодолевать световые годы за считанные месяцы."
    },
    {
      id: 2,
      title: "Жизнь на борту межзвёздного корабля: вызовы и решения",
      description: "Обзор технологий жизнеобеспечения для длительных космических миссий",
      image: "https://cdn.poehali.dev/projects/f092b6ec-5c0f-410b-bd08-760c94eff213/files/996c1afd-d7dc-43db-b6f5-608b09cc2d01.jpg",
      date: "8 ноября 2024",
      readTime: "12 мин",
      category: "Технологии",
      excerpt: "Путешествие к другим звёздам требует создания полностью автономных систем жизнеобеспечения. Наши инженеры разработали замкнутые экосистемы, способные поддерживать жизнь экипажа на протяжении десятилетий без внешней помощи."
    },
    {
      id: 3,
      title: "Варп-двигатель: от теории к практике",
      description: "Прогресс в разработке технологии искривления пространства-времени",
      image: "https://cdn.poehali.dev/projects/f092b6ec-5c0f-410b-bd08-760c94eff213/files/234f5c7a-35e2-4e18-b915-e682b860d49c.jpg",
      date: "1 ноября 2024",
      readTime: "10 мин",
      category: "Исследования",
      excerpt: "То, что когда-то казалось научной фантастикой, сегодня становится реальностью. Наша команда достигла значительного прогресса в создании рабочего прототипа варп-двигателя, основанного на теории Алькубьерре."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Rocket" className="text-primary" size={32} />
              <span className="text-2xl font-bold glow-text">SpaceShip Corp</span>
            </Link>
            <Link to="/">
              <Button variant="outline">
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
              <Icon name="BookOpen" className="text-primary" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
              Статьи и исследования
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Последние новости из мира космических технологий, научные открытия и экспертные материалы от команды SpaceShip Corp
            </p>
          </div>

          <div className="grid gap-8">
            {articles.map((article, index) => (
              <Card 
                key={article.id} 
                className="glow-card overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid md:grid-cols-[400px_1fr] gap-6">
                  <div className="relative h-[300px] md:h-auto overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 md:py-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Calendar" size={16} />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-3xl mb-3 hover:text-primary transition-colors cursor-pointer">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <Button className="group">
                        Читать статью
                        <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="glow-card bg-primary/5 border-primary/30">
              <CardContent className="py-12">
                <Icon name="Newspaper" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-3">Подпишитесь на рассылку</h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Получайте последние статьи и новости о космических технологиях прямо на вашу почту
                </p>
                <div className="flex gap-3 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Ваш email"
                    className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button>
                    Подписаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
