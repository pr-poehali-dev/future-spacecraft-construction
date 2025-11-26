import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const OrbitalConstructor = () => {
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
                Orbital Constructor
              </h1>
              <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-500 font-semibold">
                Запущен
              </span>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Автоматизированная платформа для сборки кораблей на орбите
            </p>
            <div className="rounded-2xl overflow-hidden glow-card">
              <img 
                src="https://cdn.poehali.dev/projects/f092b6ec-5c0f-410b-bd08-760c94eff213/files/7d6b1de3-7b03-4def-9ab4-f5ee84a1160f.jpg"
                alt="Orbital Constructor"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <div className="grid gap-8">
            <Card className="glow-card">
              <CardHeader>
                <CardTitle className="text-3xl">Описание проекта</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  Orbital Constructor — это крупнейшая орбитальная верфь в истории космонавтики, расположенная на высоте 36,000 км над Землёй на геостационарной орбите. Платформа полностью автоматизирована и способна собирать космические корабли любой сложности прямо в космосе.
                </p>
                <p>
                  Запущенная в 2023 году, платформа уже успешно завершила сборку 3 средних транспортных кораблей и в настоящее время работает над постройкой флагманского исследовательского судна Stellar Voyager. Орбитальная сборка позволяет создавать корабли гораздо большего размера, чем возможно при запуске с Земли.
                </p>
                <p>
                  Orbital Constructor работает в полностью автономном режиме под управлением продвинутой ИИ-системы. На платформе постоянно находится минимальный экипаж из 12 инженеров для контроля и обслуживания.
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
                        <span className="font-semibold text-lg">Размеры платформы:</span>
                      </div>
                      <p className="text-muted-foreground">2,500м × 800м × 600м</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Weight" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Общая масса:</span>
                      </div>
                      <p className="text-muted-foreground">120,000 тонн</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Orbit" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Орбита:</span>
                      </div>
                      <p className="text-muted-foreground">Геостационарная, 36,000 км</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Users" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Экипаж:</span>
                      </div>
                      <p className="text-muted-foreground">12 инженеров (вахтовый режим)</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Factory" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Сборочных доков:</span>
                      </div>
                      <p className="text-muted-foreground">4 больших + 8 малых</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Box" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Складских модулей:</span>
                      </div>
                      <p className="text-muted-foreground">24 (общий объём 500,000 м³)</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Bot" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Роботов-сборщиков:</span>
                      </div>
                      <p className="text-muted-foreground">320 единиц разного типа</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Battery" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Энергосистема:</span>
                      </div>
                      <p className="text-muted-foreground">Солнечные панели + 1 реактор, 5 ТВт</p>
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
                    <h3 className="font-semibold text-xl mb-2">Роботизированная сборка</h3>
                    <p className="text-muted-foreground">
                      320 специализированных роботов: сварочные, монтажные, транспортные и инспекционные дроны работают под управлением единой ИИ-системы
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-xl mb-2">Система доставки материалов</h3>
                    <p className="text-muted-foreground">
                      8 грузовых шаттлов непрерывно доставляют компоненты с Земли и с добывающих станций на астероидах
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-xl mb-2">3D-принтеры для металла</h3>
                    <p className="text-muted-foreground">
                      50 промышленных 3D-принтеров для изготовления нестандартных деталей и компонентов прямо на орбите
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-xl mb-2">Система контроля качества</h3>
                    <p className="text-muted-foreground">
                      Автоматическое сканирование и проверка каждого сварного шва, болтового соединения и электрической цепи
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-xl mb-2">Жилые модули экипажа</h3>
                    <p className="text-muted-foreground">
                      Комфортабельные каюты, столовая, спортзал, медблок и зоны отдыха для инженерного персонала
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card">
              <CardHeader>
                <CardTitle className="text-3xl">Завершённые проекты</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Icon name="CheckCircle2" className="text-green-500" size={28} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Cargo Hauler MK-I</h3>
                      <p className="text-muted-foreground text-sm mb-2">Завершён: Апрель 2023</p>
                      <p className="text-muted-foreground">Первый корабль, собранный на платформе. Грузовой транспорт для доставки материалов между орбитами</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Icon name="CheckCircle2" className="text-green-500" size={28} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Asteroid Miner Alpha</h3>
                      <p className="text-muted-foreground text-sm mb-2">Завершён: Сентябрь 2023</p>
                      <p className="text-muted-foreground">Добывающее судно для работы в поясе астероидов. Уже добыло 2000 тонн ценных металлов</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Icon name="CheckCircle2" className="text-green-500" size={28} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Luna Transport Shuttle</h3>
                      <p className="text-muted-foreground text-sm mb-2">Завершён: Январь 2024</p>
                      <p className="text-muted-foreground">Пассажирский шаттл на 150 человек для регулярных рейсов Земля-Луна</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card">
              <CardHeader>
                <CardTitle className="text-3xl">Текущие проекты</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Icon name="Wrench" className="text-blue-500" size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Stellar Voyager</h3>
                          <p className="text-muted-foreground text-sm">Начат: Март 2024 • Завершение: Декабрь 2026</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-3">Флагманский исследовательский корабль для межзвёздных экспедиций</p>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 bg-muted rounded-full h-3">
                          <div className="bg-blue-500 h-3 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                        <span className="font-semibold text-blue-500">60%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card bg-primary/10 border-primary/30">
              <CardHeader>
                <CardTitle className="text-3xl">Статистика работы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">3</div>
                    <p className="text-muted-foreground">Завершённых проекта</p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">98.7%</div>
                    <p className="text-muted-foreground">Время работы без сбоев</p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">45,000</div>
                    <p className="text-muted-foreground">Тонн обработано материалов</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3 text-muted-foreground">
                  <p>✅ Платформа работает в штатном режиме с момента запуска</p>
                  <p>✅ Все 3 завершённых корабля прошли сертификацию с первого раза</p>
                  <p>✅ Средняя скорость сборки на 40% выше плановой</p>
                  <p className="pt-4">
                    <strong>Планы на будущее:</strong> Расширение платформы дополнительными 4 сборочными доками в 2026 году для параллельной сборки нескольких крупных кораблей.
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

export default OrbitalConstructor;
