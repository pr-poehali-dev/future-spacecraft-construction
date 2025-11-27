import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const ArticleSpaceshipLife = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Rocket" className="text-primary" size={32} />
              <span className="text-2xl font-bold glow-text">SpaceShip Corp</span>
            </Link>
            <Link to="/articles">
              <Button variant="outline">
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                К статьям
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <article className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                Технологии
              </span>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="Calendar" size={16} />
                  <span>8 ноября 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={16} />
                  <span>12 мин</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Жизнь на борту межзвёздного корабля: вызовы и решения
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              Обзор технологий жизнеобеспечения для длительных космических миссий
            </p>

            <div className="rounded-2xl overflow-hidden glow-card mb-12">
              <img 
                src="https://cdn.poehali.dev/projects/f092b6ec-5c0f-410b-bd08-760c94eff213/files/996c1afd-d7dc-43db-b6f5-608b09cc2d01.jpg"
                alt="Жизнь на космическом корабле"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <Card className="glow-card mb-8">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed mb-6">
                  Путешествие к другим звёздам требует создания полностью автономных систем жизнеобеспечения. Наши инженеры разработали замкнутые экосистемы, способные поддерживать жизнь экипажа на протяжении десятилетий без внешней помощи.
                </p>

                <h2 className="text-3xl font-bold mb-4 mt-8">Вызов длительных миссий</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Межзвёздное путешествие — это не просто технологический вызов, это проверка на выживание для всей команды. Даже полёт к ближайшей звезде Проксима Центавра займёт от 5 до 20 лет в зависимости от типа двигателя. За это время экипаж должен:
                </p>

                <ul className="space-y-3 mb-6 text-lg">
                  <li className="flex gap-3">
                    <Icon name="Wind" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>Дышать чистым воздухом</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Droplet" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>Иметь доступ к питьевой воде</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Utensils" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>Получать полноценное питание</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="HeartPulse" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>Поддерживать физическое и психическое здоровье</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Recycle" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>Перерабатывать отходы</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 mt-8">Система производства воздуха</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Наша революционная биорегенеративная система объединяет технологии и природу. Вместо простой фильтрации CO₂, мы создали мини-экосистему внутри корабля:
                </p>

                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-4">Ключевые компоненты:</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-2">🌿 Оранжерея (200 м²)</p>
                      <p className="text-muted-foreground">Выращивание растений не только обеспечивает кислород, но и создаёт психологический комфорт. Наши оранжереи производят до 95% необходимого кислорода для экипажа из 50 человек.</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">⚗️ Химические генераторы</p>
                      <p className="text-muted-foreground">Резервная система на основе электролиза воды. Активируется при сбоях биологической системы и обеспечивает кислородом до 30 дней.</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">🔬 Система очистки CO₂</p>
                      <p className="text-muted-foreground">Многоступенчатая фильтрация улавливает 99.9% углекислого газа и преобразует его обратно в кислород через каталитические процессы.</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-4 mt-8">Водоснабжение: замкнутый цикл</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Вода — самый ценный ресурс на борту. Невозможно взять с Земли запас воды на 20 лет для 50 человек — это тысячи тонн. Решение — полная переработка:
                </p>

                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                  <p className="text-lg">
                    <strong>Эффективность нашей системы: 98.5%</strong>
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Это означает, что из 100 литров использованной воды мы извлекаем 98.5 литров чистой питьевой воды. Потери восполняются из запасов и метаболической воды.
                  </p>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  Вся вода на корабле проходит через многоступенчатую систему очистки:
                </p>

                <ol className="space-y-3 mb-6 text-lg list-decimal list-inside">
                  <li><strong>Механическая фильтрация</strong> — удаление крупных частиц</li>
                  <li><strong>Ультрафиолетовая обработка</strong> — уничтожение бактерий и вирусов</li>
                  <li><strong>Обратный осмос</strong> — очистка от солей и примесей</li>
                  <li><strong>Минерализация</strong> — добавление полезных микроэлементов</li>
                  <li><strong>Финальная УФ-обработка</strong> — гарантия стерильности</li>
                </ol>

                <h2 className="text-3xl font-bold mb-4 mt-8">Питание: гидропонные фермы</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Корабль Stellar Voyager оснащён 6 гидропонными фермами общей площадью 300 м². Это позволяет выращивать:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <Icon name="Carrot" className="text-primary mb-2" size={28} />
                    <p className="font-semibold mb-1">Овощи и зелень</p>
                    <p className="text-sm text-muted-foreground">Салат, томаты, огурцы, перец, шпинат — до 200 кг в месяц</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <Icon name="Wheat" className="text-primary mb-2" size={28} />
                    <p className="font-semibold mb-1">Зерновые</p>
                    <p className="text-sm text-muted-foreground">Пшеница, рис, бобы — основа рациона</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <Icon name="Apple" className="text-primary mb-2" size={28} />
                    <p className="font-semibold mb-1">Фрукты</p>
                    <p className="text-sm text-muted-foreground">Клубника, черника — витамины и моральная поддержка</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <Icon name="Leaf" className="text-primary mb-2" size={28} />
                    <p className="font-semibold mb-1">Белковые культуры</p>
                    <p className="text-sm text-muted-foreground">Спирулина и хлорелла — источник протеина</p>
                  </div>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  Свежие продукты покрывают около 60% рациона. Остальное — сублимированная еда, заготовленная на Земле, и синтетические протеины, производимые прямо на борту с использованием биореакторов.
                </p>

                <h2 className="text-3xl font-bold mb-4 mt-8">Искусственная гравитация</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Длительное пребывание в невесомости разрушительно для организма: атрофия мышц, потеря костной массы, проблемы с сердечно-сосудистой системой. Решение — вращающиеся секции корабля.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Жилые модули Stellar Voyager расположены на вращающемся кольце диаметром 200 метров. При скорости вращения 2 оборота в минуту создаётся центробежная сила, эквивалентная 1G земной гравитации. Экипаж живёт в привычных условиях, что критически важно для долгих миссий.
                </p>

                <h2 className="text-3xl font-bold mb-4 mt-8">Психологический комфорт</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Технологии важны, но не менее важен комфорт команды. Годы в замкнутом пространстве — серьёзное испытание для психики. Наши решения:
                </p>

                <ul className="space-y-3 mb-6 text-lg">
                  <li className="flex gap-3">
                    <Icon name="Users" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Личные каюты:</strong> У каждого члена экипажа есть личное пространство площадью 12 м² с настраиваемым освещением и климатом</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Monitor" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Виртуальная реальность:</strong> Библиотека из тысяч сценариев позволяет "побывать" на Земле, в любой точке планеты</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Dumbbell" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Спортзал и бассейн:</strong> Поддержание физической формы и отдых</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Book" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Библиотека и кинозал:</strong> Культурный досуг</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="Palette" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span><strong>Творческие мастерские:</strong> Рисование, музыка, рукоделие</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 mt-8">Медицинский блок</h2>
                <p className="text-lg leading-relaxed mb-6">
                  На борту Stellar Voyager находится полноценная больница с операционной, томографом, рентгеном и лабораторией. Два врача и четыре медсестры обеспечивают круглосуточную помощь. В экстренных случаях доступна телемедицина — связь с Землёй с задержкой от нескольких минут до часов в зависимости от расстояния.
                </p>

                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-4">Возможности медблока:</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Общая хирургия</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Стоматология</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Диагностика (МРТ, КТ, УЗИ)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Криосон (экстренное замораживание)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Психотерапия</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Реабилитация</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-4 mt-8">Заключение</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Создание замкнутой экосистемы на борту космического корабля — это инженерный подвиг, требующий интеграции биологии, химии, физики и психологии. Stellar Voyager демонстрирует, что длительные межзвёздные миссии возможны не только технически, но и с точки зрения комфорта и безопасности экипажа.
                </p>

                <p className="text-lg leading-relaxed">
                  Мы не просто строим корабли — мы создаём дома в космосе, где люди смогут жить полноценной жизнью годами, открывая новые миры.
                </p>
              </CardContent>
            </Card>

            <div className="flex gap-4 mt-12">
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

export default ArticleSpaceshipLife;
