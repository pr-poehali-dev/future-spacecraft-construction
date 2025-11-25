import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

interface Stat {
  icon: string;
  value: number;
  label: string;
  suffix: string;
}

const CounterStats = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    { icon: "Rocket", value: 247, label: "Успешных запусков", suffix: "" },
    { icon: "Users", value: 1500, label: "Специалистов", suffix: "+" },
    { icon: "Globe", value: 42, label: "Страны-партнёры", suffix: "" },
    { icon: "Award", value: 89, label: "Технологий", suffix: "" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(current);
                return newCounts;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 glow-card hover:scale-105 transition-transform duration-300"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
            <Icon name={stat.icon as any} className="text-primary" size={32} />
          </div>
          <div className="text-4xl md:text-5xl font-bold mb-2 glow-text">
            {counts[index]}{stat.suffix}
          </div>
          <div className="text-muted-foreground font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterStats;
