import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const ArticleQuantumEntanglement = () => {
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
                Наука
              </span>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Calendar" size={16} />
                  <span>15 ноября 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={16} />
                  <span>8 мин</span>
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 glow-text leading-tight">
              Квантовая запутанность и будущее космических путешествий
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
              Как использование квантовой механики может изменить наше понимание межзвёздных перелётов
            </p>

            <div className="rounded-xl md:rounded-2xl overflow-hidden glow-card mb-8 md:mb-12">
              <img 
                src="https://cdn.poehali.dev/projects/f092b6ec-5c0f-410b-bd08-760c94eff213/files/3b3df169-55a2-4a21-916d-24e96a48709f.jpg"
                alt="Квантовая запутанность"
                className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <Card className="glow-card mb-8">
              <CardContent className="pt-6">
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Квантовая запутанность — одно из самых загадочных явлений в физике. Учёные SpaceShip Corp исследуют возможность применения этого феномена для создания принципиально новых двигательных систем, способных преодолевать световые годы за считанные месяцы.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 mt-6 md:mt-8">Что такое квантовая запутанность?</h2>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Квантовая запутанность — это явление, при котором две или более частицы остаются связанными независимо от расстояния между ними. Изменение состояния одной частицы мгновенно влияет на состояние другой, даже если они находятся на противоположных концах Вселенной. Альберт Эйнштейн называл это "жутким дальнодействием", но современные эксперименты подтвердили реальность этого явления.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 mt-6 md:mt-8">Применение в космонавтике</h2>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Наша команда работает над революционной концепцией: использование квантово-запутанных частиц для создания двигательной системы нового поколения. Основная идея заключается в манипуляции квантовыми полями для создания локальных искривлений пространства-времени.
                </p>

                <div className="bg-primary/10 border-l-4 border-primary p-4 md:p-6 rounded-r-lg mb-6">
                  <p className="text-base md:text-lg italic">
                    "Мы не перемещаем корабль через пространство. Мы изменяем само пространство вокруг корабля, используя квантовые эффекты на макроскопическом уровне."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— Доктор Елена Волкова, руководитель отдела квантовой физики</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 mt-6 md:mt-8">Прорыв в лаборатории</h2>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  В сентябре 2024 года наша команда впервые смогла создать стабильное квантовое поле размером с футбольный мяч, которое просуществовало более 10 секунд. Это рекордное достижение открывает путь к созданию полноразмерного прототипа двигателя.
                </p>

                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Эксперимент проводился в условиях глубокого вакуума и при температуре, близкой к абсолютному нулю. Система из 10 миллиардов запутанных частиц создала измеримое искривление метрики пространства, которое зафиксировали сверхточные гравитационные сенсоры.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 mt-6 md:mt-8">Технические вызовы</h2>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Несмотря на успехи, впереди ещё множество технических препятствий:
                </p>

                <ul className="space-y-3 mb-6 text-base md:text-lg">
                  <li className="flex gap-3">
                    <Icon name="Zap" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Энергопотребление:</strong> Для создания достаточно большого квантового поля требуется мощность порядка 10 ТВт — это в 5 раз больше, чем вырабатывает крупнейшая атомная электростанция</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Thermometer" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Криогенное охлаждение:</strong> Система должна поддерживать температуру менее 1 микрокельвина, что требует мощных охлаждающих установок</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Settings" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Стабилизация поля:</strong> Квантовые поля крайне нестабильны — малейшие вибрации или внешние воздействия разрушают их</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Target" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Точность управления:</strong> Для безопасной навигации необходимо контролировать миллиарды параметров с точностью до квантового уровня</span>
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 mt-6 md:mt-8">Перспективы и сроки</h2>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  По нашим прогнозам, первый рабочий прототип квантового двигателя может быть создан к 2028 году. Это будет небольшая установка для беспилотного зонда, способная разогнать аппарат массой до 5 тонн до 10% скорости света.
                </p>

                <p className="text-base md:text-lg leading-relaxed mb-6">
                  К 2035 году мы планируем создать полноразмерный двигатель для пилотируемых кораблей. Это позволит достичь Проксимы Центавра — ближайшей к нам звёздной системы — всего за 5-7 лет вместо тысяч лет при использовании традиционных технологий.
                </p>

                <div className="bg-muted/30 p-4 md:p-6 rounded-lg mb-6">
                  <h3 className="text-2xl font-bold mb-4">Ключевые этапы проекта:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>2024 — Лабораторные испытания (завершено)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>2025-2027 — Разработка прототипа двигателя</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>2028 — Тестирование на беспилотном зонде</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <span>2030-2035 — Создание полноразмерного двигателя</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <span>2035+ — Первая пилотируемая межзвёздная миссия</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 mt-6 md:mt-8">Заключение</h2>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Квантовая запутанность открывает перед человечеством невероятные возможности. То, что вчера казалось научной фантастикой, сегодня становится предметом серьёзных инженерных разработок. Мы стоим на пороге новой эры космических путешествий — эры, когда звёзды станут доступны не только в теории, но и на практике.
                </p>

                <p className="text-lg leading-relaxed">
                  Команда SpaceShip Corp продолжает работать над этим амбициозным проектом, и мы уверены, что уже через десятилетие первые люди отправятся в путешествие к другим звёздным системам на кораблях с квантовыми двигателями.
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

export default ArticleQuantumEntanglement;