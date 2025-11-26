import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const QuantumDrive = () => {
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
                Quantum Drive System
              </h1>
              <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-500 font-semibold">
                Тестирование
              </span>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Прорывная двигательная установка следующего поколения
            </p>
            <div className="rounded-2xl overflow-hidden glow-card">
              <img 
                src="https://cdn.poehali.dev/projects/f092b6ec-5c0f-410b-bd08-760c94eff213/files/15e77440-a8a7-4588-aec3-05071b97a5cd.jpg"
                alt="Quantum Drive System"
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
                  Quantum Drive System — революционная двигательная система, которая полностью изменит подход к межзвёздным путешествиям. Это не просто улучшенная версия существующих технологий, а принципиально новый способ перемещения в космосе.
                </p>
                <p>
                  Система основана на манипуляции квантовыми полями и позволяет создавать локальные искривления пространства-времени. Это даёт возможность достигать околосветовых скоростей без необходимости разгона массивных объектов до релятивистских значений.
                </p>
                <p>
                  Проект находится на финальной стадии тестирования. За последние 18 месяцев были проведены успешные испытания прототипа на околоземной орбите, демонстрирующие стабильную работу всех подсистем.
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
                        <Icon name="Gauge" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Максимальная тяга:</span>
                      </div>
                      <p className="text-muted-foreground">250 меганьютонов</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Zap" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Максимальная скорость:</span>
                      </div>
                      <p className="text-muted-foreground">0.95c (95% скорости света)</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Activity" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Ускорение:</span>
                      </div>
                      <p className="text-muted-foreground">15G постоянное с компенсацией инерции</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Fuel" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Топливо:</span>
                      </div>
                      <p className="text-muted-foreground">Не требуется (использует энергию)</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Battery" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Энергопотребление:</span>
                      </div>
                      <p className="text-muted-foreground">3.5 ТВт в рабочем режиме</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Package" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Габариты установки:</span>
                      </div>
                      <p className="text-muted-foreground">30м × 25м × 25м</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Weight" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Масса:</span>
                      </div>
                      <p className="text-muted-foreground">850 тонн</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Thermometer" className="text-primary" size={20} />
                        <span className="font-semibold text-lg">Рабочая температура:</span>
                      </div>
                      <p className="text-muted-foreground">-263°C (криогенное охлаждение)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card">
              <CardHeader>
                <CardTitle className="text-3xl">Ключевые компоненты</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-xl mb-2">Квантовый генератор поля</h3>
                    <p className="text-muted-foreground">
                      Сердце системы — генератор квантовых полей, создающий управляемые искривления метрики пространства-времени в радиусе действия двигателя
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-xl mb-2">Система компенсации инерции</h3>
                    <p className="text-muted-foreground">
                      Уникальная технология, позволяющая экипажу и грузу не испытывать перегрузки при экстремальных ускорениях
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-xl mb-2">Криогенная система охлаждения</h3>
                    <p className="text-muted-foreground">
                      Многоступенчатое охлаждение квантовых компонентов до температур, близких к абсолютному нулю
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-xl mb-2">ИИ-контроллер двигателя</h3>
                    <p className="text-muted-foreground">
                      Система искусственного интеллекта для управления миллиардами параметров квантового поля в реальном времени
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card">
              <CardHeader>
                <CardTitle className="text-3xl">Результаты тестирования</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">Фаза 1: Статические испытания</h3>
                        <p className="text-sm text-muted-foreground">Январь - Март 2024</p>
                      </div>
                      <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm font-semibold">Завершено</span>
                    </div>
                    <p className="text-muted-foreground">
                      Проверка всех систем в лабораторных условиях. Стабильность квантового поля — 99.97%
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">Фаза 2: Орбитальные тесты</h3>
                        <p className="text-sm text-muted-foreground">Апрель - Август 2024</p>
                      </div>
                      <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm font-semibold">Завершено</span>
                    </div>
                    <p className="text-muted-foreground">
                      Испытания прототипа на околоземной орбите. Достигнута тяга 180 МН, скорость 0.001c
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">Фаза 3: Дальние испытания</h3>
                        <p className="text-sm text-muted-foreground">Сентябрь 2024 - Февраль 2025</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full text-sm font-semibold">В процессе</span>
                    </div>
                    <p className="text-muted-foreground">
                      Полёт к поясу астероидов и обратно. Целевая скорость — 0.1c. Прогресс: 75%
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">Фаза 4: Межзвёздный тест</h3>
                        <p className="text-sm text-muted-foreground">Март - Декабрь 2025</p>
                      </div>
                      <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-semibold">Запланировано</span>
                    </div>
                    <p className="text-muted-foreground">
                      Беспилотная миссия к облаку Оорта на скорости 0.5c для финальной проверки систем
                    </p>
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
                    <div className="bg-blue-500 h-6 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                  <span className="font-bold text-blue-500 text-xl">82%</span>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>✅ Все лабораторные испытания завершены успешно</p>
                  <p>✅ Орбитальные тесты показали отличные результаты</p>
                  <p>🔄 Идёт третья фаза — полёт к поясу астероидов</p>
                  <p>⏳ После завершения фазы 3 — подготовка к межзвёздному тесту</p>
                  <p className="pt-4">
                    <strong>Ожидаемая готовность к серийному производству: конец 2025 года</strong>
                  </p>
                  <p className="pt-2">
                    Первая установка планируется на корабль Stellar Voyager для миссии в 2030 году.
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

export default QuantumDrive;
