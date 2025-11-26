import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const StellarVoyager = () => {
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
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-5xl md:text-6xl font-bold glow-text">
                Stellar Voyager
              </h1>
              <span className="px-4 py-2 rounded-full bg-amber-500/20 text-amber-500 font-semibold">
                В разработке
              </span>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Многоцелевой исследовательский корабль для дальних космических миссий
            </p>
            <div className="rounded-2xl overflow-hidden glow-card">
              <img 
                src="https://cdn.poehali.dev/projects/f092b6ec-5c0f-410b-bd08-760c94eff213/files/4ac3bdb5-4345-46a5-ad7e-21231f75ae1f.jpg"
                alt="Stellar Voyager"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <Card className="glow-card mb-8">
            <CardHeader>
              <CardTitle className="text-3xl">Галерея</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/f092b6ec-5c0f-410b-bd08-760c94eff213/files/c6352cdb-dbc5-4b45-839a-63d08c8e8942.jpg"
                    alt="Stellar Voyager в космосе"
                    className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/f092b6ec-5c0f-410b-bd08-760c94eff213/files/ad494491-d7be-4fd1-993c-75b24f2d43a2.jpg"
                    alt="Кокпит корабля"
                    className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-8">
            <Card className="glow-card">
              <CardHeader>
                <CardTitle className="text-3xl">Описание проекта</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  Stellar Voyager — флагманский проект нашей компании, представляющий собой самый совершенный исследовательский корабль в истории космонавтики. Разработанный для экспедиций в дальний космос, он объединяет все передовые технологии: квантовые двигатели, энергетический щит, ИИ-навигацию и термоядерный реактор.
                </p>
                <p>
                  Корабль способен вместить экипаж из 50 человек и автономно функционировать в течение 20 лет без возвращения на Землю. Это идеальная платформа для исследования экзопланет, изучения межзвёздного пространства и поиска внеземных форм жизни.
                </p>
              </CardContent>
            </Card>

            <Card className="glow-card">
              <CardHeader>
                <CardTitle className="text-3xl">Технические характеристики</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Ruler" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Габариты:</span>
                      </div>
                      <p className="text-muted-foreground">Длина: 350м, Ширина: 120м, Высота: 80м</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Weight" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Масса:</span>
                      </div>
                      <p className="text-muted-foreground">45,000 тонн (полная загрузка)</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Users" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Экипаж:</span>
                      </div>
                      <p className="text-muted-foreground">50 человек (30 исследователей, 20 техников)</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Zap" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Двигатели:</span>
                      </div>
                      <p className="text-muted-foreground">Квантовые двигатели 3-го поколения</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Gauge" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Максимальная скорость:</span>
                      </div>
                      <p className="text-muted-foreground">0.85c (85% скорости света)</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Battery" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Энергосистема:</span>
                      </div>
                      <p className="text-muted-foreground">2x термоядерных реактора по 10 ТВт</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Shield" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Защита:</span>
                      </div>
                      <p className="text-muted-foreground">Энергетический щит полного покрытия</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Timer" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Автономность:</span>
                      </div>
                      <p className="text-muted-foreground">20 лет без пополнения запасов</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card">
              <CardHeader>
                <CardTitle className="text-3xl">Основные системы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-xl mb-2">Научная лаборатория</h3>
                    <p className="text-muted-foreground">
                      12 специализированных лабораторий для астрофизики, биологии, геологии и химии с оборудованием последнего поколения
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-xl mb-2">Жилые модули</h3>
                    <p className="text-muted-foreground">
                      Комфортабельные каюты с искусственной гравитацией, рекреационные зоны, тренажёрные залы и оранжерея
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-xl mb-2">Исследовательские модули</h3>
                    <p className="text-muted-foreground">
                      6 разведывательных шаттлов, 20 зондов дальнего радиуса, планетарные роверы и дроны
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-xl mb-2">Система жизнеобеспечения</h3>
                    <p className="text-muted-foreground">
                      Замкнутый цикл переработки воды и воздуха, гидропонные фермы, криогенное хранилище продуктов
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-xl mb-2">Медицинский блок</h3>
                    <p className="text-muted-foreground">
                      Полностью оснащённая больница с операционной, диагностическими аппаратами и криокамерами
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card">
              <CardHeader>
                <CardTitle className="text-3xl">Планируемые миссии</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="Target" className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Миссия Альфа: Проксима Центавра b</h3>
                      <p className="text-muted-foreground text-sm mb-2">2030 - 2034</p>
                      <p className="text-muted-foreground">Первая межзвёздная экспедиция к ближайшей экзопланете в обитаемой зоне</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="Telescope" className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Миссия Бета: Облако Оорта</h3>
                      <p className="text-muted-foreground text-sm mb-2">2035 - 2040</p>
                      <p className="text-muted-foreground">Исследование внешних границ Солнечной системы и поиск кометных ядер</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="Star" className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Миссия Гамма: TRAPPIST-1</h3>
                      <p className="text-muted-foreground text-sm mb-2">2041 - 2050</p>
                      <p className="text-muted-foreground">Экспедиция к системе с 7 землеподобными планетами на расстоянии 40 световых лет</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card bg-primary/10 border-primary/30">
              <CardHeader>
                <CardTitle className="text-3xl">Статус разработки</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 bg-muted rounded-full h-6">
                    <div className="bg-amber-500 h-6 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <span className="font-bold text-amber-500 text-xl">60%</span>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>✅ Завершено проектирование всех систем</p>
                  <p>✅ Построен корпус и основные модули</p>
                  <p>🔄 В процессе: установка квантовых двигателей</p>
                  <p>🔄 В процессе: интеграция ИИ-навигации</p>
                  <p>⏳ Запланировано: финальные испытания систем (2026)</p>
                  <p>⏳ Запланировано: первый тестовый полёт (2027)</p>
                  <p className="pt-4 font-semibond">
                    <strong>Ожидаемая дата запуска первой миссии: 2030 год</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StellarVoyager;