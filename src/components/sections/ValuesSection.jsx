import React, { useState } from 'react';
import { VALUES_TABS } from '../../constants/copyData';
import { SectionHeading } from '../ui/SectionHeading';
import { RocketLaunchIcon, EyeIcon, HeartIcon } from '@heroicons/react/24/outline';

export const ValuesSection = () => {
  const [activeTab, setActiveTab] = useState('missao');

  const tabIcons = {
    missao: RocketLaunchIcon,
    visao: EyeIcon,
    valores: HeartIcon
  };

  const tabs = [
    { id: 'missao', label: 'Missão' },
    { id: 'visao', label: 'Visão' },
    { id: 'valores', label: 'Valores' }
  ];

  const current = VALUES_TABS[activeTab];
  const Icon = tabIcons[activeTab] || RocketLaunchIcon;

  return (
    <section id="sobre-nos" className="py-24 bg-[#131b2e]/30 border-y border-white/5 relative md:pl-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Institucional"
          title="Nossos Fundamentos"
          subtitle="Nossa história, visão e compromisso ético como a agência das agências."
        />

        {/* Tab Buttons */}
        <div
          id="valores-tabs-container"
          className="flex flex-wrap justify-center border border-white/10 rounded-2xl p-1.5 bg-white/5 gap-2 mb-8 max-w-md mx-auto"
          data-aos="fade-up"
        >
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[100px] px-5 py-3 rounded-xl font-bold text-sm transition-all duration-500 ease-out focus:outline-none cursor-pointer ${
                  isSelected
                    ? 'border border-[#00AB4F] text-[#00AB4F] bg-[#00AB4F]/10 shadow-[0_0_15px_rgba(0,171,79,0.2)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 hover:-translate-y-0.5'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Panel */}
        <div data-aos="fade-up" className="w-full">
          <div
            key={activeTab}
            id={`valores-painel-${activeTab}`}
            className="interactive-card bg-white/5 border border-white/10 hover:border-[#00AB4F]/60 hover:-translate-y-2 hover:shadow-[0_18px_38px_-10px_rgba(0,171,79,0.35)] rounded-3xl p-8 md:p-12 space-y-4 shadow-2xl transition-all duration-500 ease-out cursor-pointer"
          >
            <div className="flex items-center space-x-3 text-[#00AB4F]">
              <div className="w-12 h-12 rounded-xl bg-[#00AB4F]/10 border border-[#00AB4F]/20 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white font-heading">
                {current.title}
              </h3>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light pt-2">
              {current.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

