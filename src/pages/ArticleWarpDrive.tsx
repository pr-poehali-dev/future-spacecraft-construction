import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const ArticleWarpDrive = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Rocket" className="text-primary" size={28} />
              <span className="text-xl md:text-2xl font-bold glow-text">SpaceShip Corp</span>
            </Link>
            <Link to="/articles">
              <Button variant="outline" size="sm" className="md:h-10">
                <Icon name="ArrowLeft" size={18} className="mr-1 md:mr-2" />
                <span className="hidden sm:inline">К статьям</span>
                <span className="sm:hidden">Назад</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <article className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                Исследования
              </span>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Calendar" size={16} />
                  <span>1 ноября 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={16} />
                  <span>10 мин</span>
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 glow-text leading-tight">
              Варп-двигатель: от теории к практике
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
              Прогресс в разработке технологии искривления пространства-времени
            </p>

            <div className="rounded-xl md:rounded-2xl overflow-hidden glow-card mb-8 md:mb-12">
              <img 
                src="https://cdn.poehali.dev/projects/f092b6ec-5c0f-410b-bd08-760c94eff213/files/234f5c7a-35e2-4e18-b915-e682b860d49c.jpg"
                alt="Варп-двигатель"
                className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <Card className="glow-card mb-8">
              <CardContent className="pt-6">
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  То, что когда-то казалось научной фантастикой, сегодня становится реальностью. Наша команда достигла значительного прогресса в создании рабочего прототипа варп-двигателя, основанного на теории Алькубьерре.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 mt-6 md:mt-8">История идеи</h2>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Концепция варп-двигателя была предложена мексиканским физиком Мигелем Алькубьерре в 1994 году. Его революционная идея: вместо того чтобы разгонять корабль до сверхсветовой скорости (что запрещено теорией относительности), можно искривить само пространство-время вокруг корабля.
                </p>

                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                  <p className="text-lg italic">
                    "Корабль остаётся неподвижным в локальном пространстве, но само пространство перемещается, сжимаясь впереди и расширяясь позади. Корабль движется вместе с пузырём искривлённого пространства."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— Профессор Михаил Громов, главный теоретик проекта</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 mt-6 md:mt-8">Основной принцип</h2>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Представьте муравья на листе бумаги. Чтобы добраться из точки А в точку Б, он должен пройти расстояние. Но что если согнуть лист так, чтобы точки соприкоснулись? Муравей окажется в точке Б мгновенно. Варп-двигатель делает примерно то же самое с пространством-временем.
                </p>

                <div className="bg-muted/30 p-4 md:p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-4">Три фазы работы варп-двигателя:</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-2 flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">1</span>
                        Сжатие пространства впереди
                      </p>
                      <p className="text-muted-foreground ml-10">Генератор создаёт области с отрицательной плотностью энергии, которые сжимают пространство перед кораблём, уменьшая расстояние до цели.</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2 flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">2</span>
                        Расширение пространства позади
                      </p>
                      <p className="text-muted-foreground ml-10">Одновременно пространство позади корабля расширяется, создавая дополнительное "давление" для движения вперёд.</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2 flex items-center gap-2">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">3</span>
                        Стабилизация варп-пузыря
                      </p>
                      <p className="text-muted-foreground ml-10">Корабль находится внутри плоского пространства-времени, экипаж не испытывает перегрузок, время течёт нормально.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 mt-6 md:mt-8">Главная проблема: экзотическая материя</h2>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Оригинальная теория Алькубьерре требовала огромных количеств материи с отрицательной плотностью энергии — так называемой "экзотической материи". По первоначальным расчётам требовалась масса, эквивалентная массе Юпитера, преобразованная в чистую энергию. Это делало идею абсолютно нереализуемой.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 mt-6 md:mt-8">Прорывы последних лет</h2>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  За последние 10 лет произошла серия важных открытий:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-muted/30 p-5 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name="Lightbulb" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">2016 — Оптимизация геометрии</h3>
                        <p className="text-muted-foreground">Учёные NASA показали, что изменение формы варп-пузыря с сферы на тор (бублик) снижает энергетические требования в 1000 раз.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 p-5 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name="Zap" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">2019 — Квантовый эффект Казимира</h3>
                        <p className="text-muted-foreground">Обнаружено, что квантовые флуктуации в вакууме создают локальные области с отрицательной энергией — именно то, что нужно для варп-двигателя.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 p-5 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name="Cpu" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">2022 — Метаматериалы</h3>
                        <p className="text-muted-foreground">SpaceShip Corp разработала специальные наноструктуры, усиливающие эффект Казимира в миллионы раз, что позволяет генерировать достаточно экзотической материи.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 p-5 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name="Atom" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">2024 — Первый прототип</h3>
                        <p className="text-muted-foreground">В августе 2024 года наша команда впервые создала стабильный микро-варп-пузырь размером 1 мм, просуществовавший 0.003 секунды.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 mt-6 md:mt-8">Технические характеристики проекта</h2>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Мы работаем над созданием прототипа варп-двигателя для беспилотного зонда массой 5 тонн:
                </p>

                <div className="grid sm:grid-cols-2 gap-3 md:gap-4 mb-6">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <Icon name="Gauge" className="text-primary mb-2" size={28} />
                    <p className="font-semibold mb-1">Целевая скорость</p>
                    <p className="text-sm text-muted-foreground">10c (в 10 раз быстрее света)</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <Icon name="Battery" className="text-primary mb-2" size={28} />
                    <p className="font-semibold mb-1">Энергопотребление</p>
                    <p className="text-sm text-muted-foreground">50 ТВт в момент формирования пузыря</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <Icon name="Circle" className="text-primary mb-2" size={28} />
                    <p className="font-semibold mb-1">Размер варп-пузыря</p>
                    <p className="text-sm text-muted-foreground">Диаметр 50 метров</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <Icon name="Timer" className="text-primary mb-2" size={28} />
                    <p className="font-semibold mb-1">Время стабилизации</p>
                    <p className="text-sm text-muted-foreground">15 секунд на формирование пузыря</p>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 mt-6 md:mt-8">Текущие испытания</h2>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Наша команда проводит серию экспериментов в специальной лаборатории на орбитальной станции:
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 p-4 bg-green-500/10 border-l-4 border-green-500 rounded-r-lg">
                    <Icon name="CheckCircle" className="text-green-500 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold">Этап 1: Микропузыри (завершён)</p>
                      <p className="text-sm text-muted-foreground">Создание варп-пузырей размером от 1 микрона до 1 мм</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg">
                    <Icon name="Loader" className="text-blue-500 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold">Этап 2: Мезопузыри (в процессе)</p>
                      <p className="text-sm text-muted-foreground">Масштабирование до 1-10 см, увеличение времени жизни до 1 секунды</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-muted/30 border-l-4 border-muted rounded-r-lg">
                    <Icon name="Clock" className="text-muted-foreground flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold text-muted-foreground">Этап 3: Макропузыри (2025-2026)</p>
                      <p className="text-sm text-muted-foreground">Создание пузырей размером 1-10 метров</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-muted/30 border-l-4 border-muted rounded-r-lg">
                    <Icon name="Clock" className="text-muted-foreground flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold text-muted-foreground">Этап 4: Полноразмерный прототип (2027-2030)</p>
                      <p className="text-sm text-muted-foreground">Создание двигателя для тестового зонда</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 mt-6 md:mt-8">Вызовы и риски</h2>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Несмотря на успехи, впереди множество нерешённых проблем:
                </p>

                <ul className="space-y-3 mb-6 text-base md:text-lg">
                  <li className="flex gap-3">
                    <Icon name="AlertTriangle" className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Излучение Хокинга:</strong> При схлопывании варп-пузыря может высвобождаться огромное количество радиации, опасной для экипажа и систем корабля</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="AlertTriangle" className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Навигация:</strong> Внутри варп-пузыря невозможно менять курс или останавливаться — весь маршрут нужно рассчитать заранее с абсолютной точностью</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="AlertTriangle" className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Столкновения:</strong> На сверхсветовой скорости даже пылинка может стать смертельной — нужна система защиты</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="AlertTriangle" className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                    <span><strong>Энергия:</strong> Хотя требования снизились, всё равно нужен источник огромной мощности</span>
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 mt-6 md:mt-8">Перспективы применения</h2>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Если мы успешно решим все технические проблемы, варп-двигатель откроет невероятные возможности:
                </p>

                <div className="bg-primary/5 p-6 rounded-lg mb-6">
                  <ul className="space-y-2 text-lg">
                    <li>🌟 Проксима Центавра (4.2 световых года) — <strong>5 месяцев</strong> вместо 4 лет</li>
                    <li>🌟 Сириус (8.6 световых лет) — <strong>10 месяцев</strong></li>
                    <li>🌟 Система TRAPPIST-1 (40 световых лет) — <strong>4 года</strong></li>
                    <li>🌟 Центр Млечного Пути (26,000 световых лет) — <strong>2,600 лет</strong> (всё ещё долго, но возможно с поколенческими кораблями)</li>
                  </ul>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 mt-6 md:mt-8">Заключение</h2>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Варп-двигатель — это не просто мечта фантастов, это реальная инженерная задача, над которой работают сотни учёных по всему миру. Мы в SpaceShip Corp верим, что в течение следующих 20-30 лет создадим действующий прототип.
                </p>

                <p className="text-lg leading-relaxed">
                  Это будет величайшее достижение человечества — технология, которая превратит нас из обитателей одной планеты в истинно межзвёздную цивилизацию. Звёзды ждут нас, и мы уже на пути к ним.
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 md:mt-12">
              <Link to="/articles" className="flex-1">
                <Button variant="outline" className="w-full">
                  <Icon name="ArrowLeft" size={20} className="mr-2" />
                  Все статьи
                </Button>
              </Link>
              <Button className="flex-1">
                <Icon name="Share2" size={20} className="mr-2" />
                Поделиться
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleWarpDrive;