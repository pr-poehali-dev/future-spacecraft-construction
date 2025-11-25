import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState, Suspense } from "react";
import SpaceShip3D from "@/components/SpaceShip3D";
import Timeline from "@/components/Timeline";
import CounterStats from "@/components/CounterStats";

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const technologies = [
    {
      icon: "Rocket",
      title: "Квантовые двигатели",
      description: "Революционная система движения на основе квантовой физики для межзвёздных перелётов"
    },
    {
      icon: "Zap",
      title: "Энергетический щит",
      description: "Защита нового поколения от космической радиации и микрометеоритов"
    },
    {
      icon: "Cpu",
      title: "ИИ-навигация",
      description: "Автономная система управления на базе искусственного интеллекта"
    },
    {
      icon: "Atom",
      title: "Термоядерный реактор",
      description: "Компактный источник энергии мощностью 10 ТВт для длительных миссий"
    }
  ];

  const projects = [
    {
      name: "Stellar Voyager",
      image: "https://cdn.poehali.dev/projects/f092b6ec-5c0f-410b-bd08-760c94eff213/files/4ac3bdb5-4345-46a5-ad7e-21231f75ae1f.jpg",
      status: "В разработке",
      description: "Многоцелевой исследовательский корабль для дальних космических миссий"
    },
    {
      name: "Quantum Drive System",
      image: "https://cdn.poehali.dev/projects/f092b6ec-5c0f-410b-bd08-760c94eff213/files/15e77440-a8a7-4588-aec3-05071b97a5cd.jpg",
      status: "Тестирование",
      description: "Прорывная двигательная установка следующего поколения"
    },
    {
      name: "Orbital Constructor",
      image: "https://cdn.poehali.dev/projects/f092b6ec-5c0f-410b-bd08-760c94eff213/files/7d6b1de3-7b03-4def-9ab4-f5ee84a1160f.jpg",
      status: "Запущен",
      description: "Автоматизированная платформа для сборки кораблей на орбите"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Rocket" className="text-primary" size={32} />
              <span className="text-2xl font-bold glow-text">SpaceShip Corp</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#tech" className="hover:text-primary transition-colors">Технологии</a>
              <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
              <a href="#timeline" className="hover:text-primary transition-colors">История</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
                Строим будущее в космосе
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Инновационные технологии для создания космических кораблей нового поколения. 
                Мы превращаем научную фантастику в реальность.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gradient-cosmic text-white">
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Узнать больше
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть видео
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <Suspense fallback={<div className="w-full h-[500px] rounded-2xl bg-muted/30 animate-pulse" />}>
                <SpaceShip3D />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              Наши достижения
            </h2>
            <p className="text-xl text-muted-foreground">
              Цифры, которые вдохновляют на покорение космоса
            </p>
          </div>
          <CounterStats />
        </div>
      </section>

      <section id="tech" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              Технологии будущего
            </h2>
            <p className="text-xl text-muted-foreground">
              Передовые разработки для покорения космоса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card 
                key={index} 
                className="glow-card hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Icon name={tech.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {tech.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              История развития
            </h2>
            <p className="text-xl text-muted-foreground">
              От идеи до покорения космоса
            </p>
          </div>
          <Timeline />
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              Наши проекты
            </h2>
            <p className="text-xl text-muted-foreground">
              Корабли, которые изменят историю космонавтики
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="glow-card overflow-hidden group hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                      {project.status}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Готовы начать сотрудничество? Напишите нам!
            </p>
          </div>
          <Card className="glow-card animate-fade-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Введите имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-background"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gradient-cosmic text-white">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 SpaceShip Corp. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;