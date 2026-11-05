import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../../constants/copyData';

export const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const stepTime = 30;
    const totalSteps = duration / stepTime;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / totalSteps, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(
        STATS.map((stat) => Math.floor(stat.target * easedProgress))
      );

      if (currentStep >= totalSteps) {
        clearInterval(timer);
        setCounts(STATS.map((s) => s.target));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative py-10 md:py-12 bg-[#131b2e]/60 border-y border-white/5 z-20 backdrop-blur-xs md:pl-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-center justify-center divide-y md:divide-y-0 md:divide-x divide-white/5">
          {STATS.map((stat, idx) => {
            const formatted =
              stat.format === 'currency'
                ? counts[idx].toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : counts[idx].toLocaleString('pt-BR');

            return (
              <div
                key={stat.id}
                id={`stat-card-${stat.id}`}
                className="flex flex-col items-center text-center p-3 sm:p-4"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight flex items-baseline font-heading">
                  <span className="text-[#00AB4F] mr-1.5 text-lg sm:text-xl md:text-2xl lg:text-3xl">{stat.prefix}</span>
                  <span>{formatted}</span>
                </span>
                <span className="text-xs sm:text-sm text-gray-400 mt-1.5 font-medium">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
