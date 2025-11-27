import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const AINavigation = () => {
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
                Назад
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
              <Icon name="Cpu" className="text-primary" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
              ИИ-навигация
            </h1>
            <p className="text-xl text-muted-foreground">
              Автономная система управления на базе искусственного интеллекта
            </p>
            <div className="rounded-2xl overflow-hidden glow-card mt-8">
              <img 
                src="https://cdn.poehali.dev/projects/f092b6ec-5c0f-410b-bd08-760c94eff213/files/4300518c-f015-4155-b814-643ccdabe250.jpg"
                alt="ИИ-навигация"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <div className="grid gap-8">
            <Card className="glow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Принцип работы</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  ИИ-навигация использует квантовые нейронные сети для обработки огромных массивов данных в режиме реального времени. Система анализирует гравитационные поля, космические объекты и строит оптимальные маршруты с учётом всех факторов.
                </p>
                <p>
                  Благодаря машинному обучению, система постоянно совершенствуется, изучая новые космические феномены и адаптируясь к изменяющимся условиям межзвёздного пространства.
                </p>
              </CardContent>
            </Card>

            <Card className="glow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Возможности системы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Icon name="Route" className="text-primary" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Построение маршрутов</h3>
                      <p className="text-muted-foreground">
                        Расчёт оптимальных траекторий с учётом гравитационных колодцев, астероидных полей и экономии топлива
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Icon name="Radar" className="text-primary" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Обнаружение угроз</h3>
                      <p className="text-muted-foreground">
                        Сканирование пространства в радиусе 100 световых лет с предсказанием потенциальных опасностей
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Icon name="Workflow" className="text-primary" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Автопилот</h3>
                      <p className="text-muted-foreground">
                        Полностью автономное управление кораблём во время длительных перелётов с возможностью коррекции курса
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Icon name="MessageSquare" className="text-primary" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Голосовое управление</h3>
                      <p className="text-muted-foreground">
                        Естественный диалог с системой на 150+ языках с пониманием контекста и намерений экипажа
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Технические характеристики</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Cpu" className="text-primary" size={20} />
                      <span className="font-semibold">Процессор:</span>
                    </div>
                    <p className="text-muted-foreground">Квантовый, 10^18 операций/сек</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Database" className="text-primary" size={20} />
                      <span className="font-semibold">Память:</span>
                    </div>
                    <p className="text-muted-foreground">100 петабайт оперативной</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Gauge" className="text-primary" size={20} />
                      <span className="font-semibold">Точность навигации:</span>
                    </div>
                    <p className="text-muted-foreground">±0.0001% на 1000 св. лет</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" className="text-primary" size={20} />
                      <span className="font-semibold">Время реакции:</span>
                    </div>
                    <p className="text-muted-foreground">0.001 секунды</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Преимущества</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span>Снижение нагрузки на экипаж - автоматизация рутинных операций</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span>Оптимизация расхода энергии на 40% за счёт умного планирования</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span>Предсказание и предотвращение аварийных ситуаций</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span>Самообучение и адаптация к новым условиям космоса</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glow-card bg-primary/10 border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl">Статус разработки</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1 bg-muted rounded-full h-4">
                    <div className="bg-primary h-4 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <span className="font-bold text-primary">90%</span>
                </div>
                <p className="text-muted-foreground">
                  Система активно используется на орбитальных кораблях и показывает отличные результаты. Готовится финальная версия для межзвёздных миссий.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AINavigation;