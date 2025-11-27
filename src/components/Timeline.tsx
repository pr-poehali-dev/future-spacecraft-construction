import Icon from "@/components/ui/icon";
import { useEffect, useRef, useState } from "react";

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const milestones = [
    {
      year: "2020",
      title: "Основание компании",
      description: "Запуск исследовательского центра космических технологий",
      icon: "Rocket"
    },
    {
      year: "2021",
      title: "Первый прототип",
      description: "Успешные испытания квантового двигателя в лаборатории",
      icon: "FlaskConical"
    },
    {
      year: "2022",
      title: "Орбитальные тесты",
      description: "Запуск тестового модуля на низкую околоземную орбиту",
      icon: "Satellite"
    },
    {
      year: "2023",
      title: "Breakthrough",
      description: "Прорыв в технологии энергетических щитов",
      icon: "Shield"
    },
    {
      year: "2024",
      title: "Stellar Voyager",
      description: "Начало строительства первого полноценного корабля",
      icon: "Construction"
    },
    {
      year: "2025",
      title: "Первый полёт",
      description: "Планируемый запуск Stellar Voyager к Марсу",
      icon: "Orbit"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={timelineRef} className="relative px-4 md:px-0">
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500"></div>
      
      <div className="space-y-8 md:space-y-12">
        {milestones.map((milestone, index) => (
          <div 
            key={index}
            data-index={index}
            className={`timeline-item relative flex flex-col md:flex-row gap-8 items-start md:items-center transition-all duration-700 ${
              visibleItems.includes(index) 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
              <div className="inline-block text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{milestone.year}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{milestone.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{milestone.description}</p>
              </div>
            </div>

            <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center glow-card z-10">
              <Icon name={milestone.icon as any} className="text-white" size={20} />
            </div>

            <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : ''}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;