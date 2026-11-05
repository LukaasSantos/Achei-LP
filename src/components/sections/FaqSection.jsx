import React, { useState } from 'react';
import { FAQ_ITEMS } from '../../constants/copyData';
import { SectionHeading } from '../ui/SectionHeading';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#00AB4F]/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Bloco com largura de 50vw no desktop alinhado à direita */}
        <div className="w-full lg:w-[50vw] ml-auto flex flex-col items-end text-right">
          <SectionHeading
            badge="Tire suas Dúvidas"
            title="Perguntas Frequentes"
            subtitle="Tudo o que você precisa saber sobre como trabalhamos, parcerias e resultados no Google Ads."
            align="right"
            className="w-full"
          />

          {/* Accordion List ocupando os 50vw alinhado à direita */}
          <div className="w-full space-y-3.5 my-4" data-aos="fade-up">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  id={`faq-item-${idx + 1}`}
                  className="interactive-card bg-white/5 border border-white/5 hover:border-[#00AB4F]/50 hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(0,171,79,0.25)] rounded-2xl overflow-hidden transition-all duration-500 ease-out shadow-lg"
                >
                  <button
                    id={`faq-toggle-${idx + 1}`}
                    type="button"
                    onClick={() => toggleItem(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-right focus:outline-none cursor-pointer gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <ChevronDownIcon
                      className={`w-5 h-5 text-[#00AB4F] shrink-0 transform transition-transform duration-500 ease-out stroke-[2.5] ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                    <span className="text-sm md:text-base font-bold text-white font-heading group-hover:text-[#00AB4F] transition-colors duration-500">
                      {item.question}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-gray-300 leading-relaxed font-light border-t border-white/5 pt-4 text-right">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
