import React, { useState } from 'react';
import { SOLUTIONS } from '../../constants/copyData';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { trackWhatsAppClick } from '../../utils/googleTags';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export const SolutionsTabs = () => {
  const [selectedSolution, setSelectedSolution] = useState(SOLUTIONS[0]);

  return (
    <section id="solucoes" className="py-24 relative overflow-hidden md:pl-24">
      {/* Background glow decoration */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#00AB4F]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Nossas Soluções"
          title="Como aceleramos o crescimento do seu negócio"
          subtitle="Explore nossas modalidades de atuação em Google Ads e escolha o modelo perfeito para sua empresa ou agência."
        />

        {/* Mini Cards Grid Selector (Layout da Referência adaptado ao Dark Mode) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-10">
          {SOLUTIONS.map((item) => {
            const isSelected = selectedSolution.id === item.id;
            return (
              <button
                key={item.id}
                id={`solucao-card-${item.id}`}
                type="button"
                onClick={() => setSelectedSolution(item)}
                className={`p-3 md:p-4 text-left rounded-xl transition-all duration-500 ease-out border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#131b2e] border-[#00AB4F] shadow-[0_0_20px_rgba(0,171,79,0.25)] -translate-y-1.5'
                    : 'bg-[#131b2e]/60 border-white/5 hover:border-[#00AB4F]/50 hover:bg-[#131b2e] hover:-translate-y-1.5 hover:shadow-[0_12px_28px_-8px_rgba(0,171,79,0.25)]'
                }`}
                aria-pressed={isSelected}
              >
                <div className="w-full aspect-video rounded-lg overflow-hidden bg-black/40 mb-2.5 flex items-center justify-center border border-white/5 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    width="180"
                    height="100"
                  />
                  <span
                    className={`absolute top-1.5 right-1.5 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider ${
                      isSelected ? 'bg-[#00AB4F] text-white' : 'bg-black/70 text-gray-300 backdrop-blur-xs'
                    }`}
                  >
                    {item.flag}
                  </span>
                </div>
                <div>
                  <h3
                    className={`text-xs md:text-sm font-semibold truncate ${
                      isSelected ? 'text-[#00AB4F]' : 'text-white'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 line-clamp-1 mt-0.5 font-light">
                    {item.shortDesc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Panel (Layout da Referência com Glassmorphism Dark) */}
        <div
          key={selectedSolution.id}
          id="solucao-detalhe-painel"
          className="interactive-card glass-card bg-[#131b2e]/90 p-6 md:p-10 rounded-2xl border border-[#00AB4F]/30 hover:border-[#00AB4F]/50 shadow-2xl relative overflow-hidden transition-all duration-500 ease-out"
          data-aos="fade-up"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00AB4F]/10 rounded-full filter blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Image Preview with Frame */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative inline-block rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 group">
                <img
                  src={selectedSolution.image}
                  alt={selectedSolution.title}
                  className="w-auto h-auto max-w-full max-h-[340px] block object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                  width="440"
                  height="320"
                />
                <span className="absolute bottom-3 left-3 text-xs font-mono font-semibold px-2.5 py-1 bg-[#0b0f19]/90 text-[#00AB4F] rounded-md border border-[#00AB4F]/30 shadow-sm backdrop-blur-xs">
                  {selectedSolution.flag}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-block px-3 py-1 text-xs font-mono font-semibold text-[#00AB4F] bg-[#00AB4F]/10 rounded-lg border border-[#00AB4F]/30">
                {selectedSolution.flag}
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-heading">
                {selectedSolution.title}
              </h3>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light">
                {selectedSolution.fullDesc}
              </p>

              {/* Feature Highlights with Checkmarks */}
              {selectedSolution.highlights && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {selectedSolution.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-[#00AB4F] shrink-0 mt-0.5 stroke-[2]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Action Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Button
                  href={selectedSolution.ctaLink}
                  target="_blank"
                  variant="glow"
                  size="md"
                  onClick={() => trackWhatsAppClick(`Solucao_${selectedSolution.id}`)}
                  icon={<ArrowRightIcon className="w-4 h-4" />}
                >
                  {selectedSolution.ctaText}
                </Button>

                <Button
                  href="#contato"
                  variant="outline"
                  size="md"
                >
                  Falar com um Especialista
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

