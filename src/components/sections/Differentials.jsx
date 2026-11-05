import React from 'react';
import { DIFFERENTIALS } from '../../constants/copyData';
import { SectionHeading } from '../ui/SectionHeading';
import {
  ShieldCheckIcon,
  UserGroupIcon,
  LinkIcon,
  ArrowTrendingUpIcon,
  AcademicCapIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const iconMap = {
  ShieldCheckIcon,
  UserGroupIcon,
  LinkIcon,
  ArrowTrendingUpIcon,
  AcademicCapIcon,
  ArrowPathIcon
};

export const Differentials = () => {
  return (
    <section id="diferenciais" className="py-24 bg-[#131b2e]/30 border-y border-white/5 relative md:pl-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Diferenciais Exclusivos"
          title="Por que escolher a Achei?"
          subtitle="Nosso foco é ajudar agências e seus clientes a alcançarem resultados sólidos no Google Ads, integrando esforços com outras áreas para garantir o sucesso em toda a jornada de marketing."
        />

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {DIFFERENTIALS.map((diff, idx) => {
            const Icon = iconMap[diff.icon] || ShieldCheckIcon;

            return (
              <div
                key={diff.id}
                data-aos="fade-up"
                data-aos-delay={idx * 60}
                className="h-full"
              >
                <div
                  id={`diferencial-card-${diff.id}`}
                  className="h-full p-6 md:p-8 bg-white/5 border border-white/5 rounded-2xl flex flex-col space-y-4 interactive-card hover:border-[#00AB4F]/60 hover:-translate-y-2 hover:shadow-[0_18px_38px_-10px_rgba(0,171,79,0.35)] transition-all duration-500 ease-out shadow-lg cursor-pointer"
                >
                  <div className="flex items-center space-x-3 text-[#00AB4F]">
                    <div className="w-12 h-12 rounded-xl bg-[#00AB4F]/10 border border-[#00AB4F]/20 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white font-heading">
                      {diff.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {diff.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

