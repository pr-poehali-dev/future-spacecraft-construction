import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const FusionReactor = () => {
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
              <Icon name="Atom" className="text-primary" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
              Термоядерный реактор
            </h1>
            <p className="text-xl text-muted-foreground">
              Компактный источник энергии мощностью 10 ТВт для длительных миссий
            </p>
            <div className="rounded-2xl overflow-hidden glow-card mt-8">
              <img 
                src="https://cdn.poehali.dev/projects/f092b6ec-5c0f-410b-bd08-760c94eff213/files/06478459-da30-4575-a451-394a8f02faec.jpg"
                alt="Термоядерный реактор"
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
                  Компактный термоядерный реактор использует управляемый синтез изотопов дейтерия и гелия-3 в условиях магнитного удержания плазмы. Температура реакции достигает 150 миллионов градусов Цельсия.
                </p>
                <p>
                  Инновационная система токамак четвёртого поколения с квантовыми магнитными ловушками обеспечивает стабильную реакцию синтеза и эффективное преобразование энергии в электричество с КПД 65%.
                </p>
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
                      <Icon name="Zap" className="text-primary" size={20} />
                      <span className="font-semibold">Выходная мощность:</span>
                    </div>
                    <p className="text-muted-foreground">10 ТВт непрерывно</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Droplet" className="text-primary" size={20} />
                      <span className="font-semibold">Топливо:</span>
                    </div>
                    <p className="text-muted-foreground">Дейтерий + Гелий-3</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Timer" className="text-primary" size={20} />
                      <span className="font-semibold">Время работы:</span>
                    </div>
                    <p className="text-muted-foreground">50 лет без дозаправки</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Package" className="text-primary" size={20} />
                      <span className="font-semibold">Габариты:</span>
                    </div>
                    <p className="text-muted-foreground">20м × 15м × 15м</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Weight" className="text-primary" size={20} />
                      <span className="font-semibold">Масса:</span>
                    </div>
                    <p className="text-muted-foreground">500 тонн</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Thermometer" className="text-primary" size={20} />
                      <span className="font-semibold">Температура плазмы:</span>
                    </div>
                    <p className="text-muted-foreground">150 млн °C</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Системы безопасности</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-lg mb-2">Магнитное удержание</h3>
                    <p className="text-muted-foreground">
                      Многослойная система магнитных полей предотвращает контакт плазмы со стенками реактора
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-lg mb-2">Система охлаждения</h3>
                    <p className="text-muted-foreground">
                      Криогенное охлаждение магнитов до -269°C с многоуровневой защитой от перегрева
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-lg mb-2">Аварийное отключение</h3>
                    <p className="text-muted-foreground">
                      Мгновенное прекращение реакции при обнаружении неисправностей - время реакции 0.01 секунды
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-lg mb-2">Радиационная защита</h3>
                    <p className="text-muted-foreground">
                      Многослойная биологическая защита толщиной 3 метра из композитных материалов
                    </p>
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
                    <span>Огромная мощность в компактном корпусе - в 1000 раз эффективнее солнечных панелей</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span>Экологически чистая энергия - единственный продукт реакции это гелий</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span>Длительная автономная работа без обслуживания</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span>Стабильная выходная мощность независимо от внешних условий</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span>Возможность масштабирования - параллельное подключение реакторов</span>
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
                    <div className="bg-primary h-4 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  <span className="font-bold text-primary">95%</span>
                </div>
                <p className="text-muted-foreground">
                  Прототип успешно работает на орбитальной станции уже 2 года. Начато серийное производство для установки на межзвёздные корабли. Первый корабль с реактором отправится в путь в 2025 году.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FusionReactor;