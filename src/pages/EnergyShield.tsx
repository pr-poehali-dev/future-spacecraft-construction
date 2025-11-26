import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const EnergyShield = () => {
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
              <Icon name="Zap" className="text-primary" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
              Энергетический щит
            </h1>
            <p className="text-xl text-muted-foreground">
              Защита нового поколения от космической радиации и микрометеоритов
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="glow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Принцип работы</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  Энергетический щит создаёт защитное поле вокруг космического корабля, используя управляемое электромагнитное излучение высокой интенсивности. Поле отклоняет заряженные частицы и испаряет мелкие объекты до их столкновения с корпусом.
                </p>
                <p>
                  Многослойная архитектура щита включает внешний слой для крупных объектов, средний для радиации и внутренний для тонкой настройки защиты критических систем корабля.
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
                      <Icon name="Shield" className="text-primary" size={20} />
                      <span className="font-semibold">Радиус защиты:</span>
                    </div>
                    <p className="text-muted-foreground">500 метров от корпуса</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Zap" className="text-primary" size={20} />
                      <span className="font-semibold">Мощность поля:</span>
                    </div>
                    <p className="text-muted-foreground">15 петаджоулей</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Target" className="text-primary" size={20} />
                      <span className="font-semibold">Защита от радиации:</span>
                    </div>
                    <p className="text-muted-foreground">99.97% эффективность</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Activity" className="text-primary" size={20} />
                      <span className="font-semibold">Время активации:</span>
                    </div>
                    <p className="text-muted-foreground">0.3 секунды</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Уровни защиты</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-lg mb-2">Уровень 1 - Пассивный режим</h3>
                    <p className="text-muted-foreground">
                      Базовая защита от фоновой радиации и микрочастиц. Энергопотребление минимальное - 0.5 ТВт.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-lg mb-2">Уровень 2 - Активный режим</h3>
                    <p className="text-muted-foreground">
                      Усиленная защита при прохождении астероидных полей и зон с высокой радиацией. Потребление 3 ТВт.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-lg mb-2">Уровень 3 - Максимальная защита</h3>
                    <p className="text-muted-foreground">
                      Полная защита при критических ситуациях и боевых столкновениях. Потребление 8 ТВт.
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
                    <span>Адаптивная защита с автоматической регулировкой мощности</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span>Защита от всех типов космической радиации</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span>Быстрая реакция на угрозы - менее 1 секунды</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span>Не требует физической брони - экономия массы корабля</span>
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
                    <div className="bg-primary h-4 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <span className="font-bold text-primary">85%</span>
                </div>
                <p className="text-muted-foreground">
                  Система успешно прошла полевые испытания на орбитальной станции. Готовится к установке на первые межзвёздные корабли.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergyShield;
