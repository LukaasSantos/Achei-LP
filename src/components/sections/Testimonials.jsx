import React, { useState } from 'react';
import { TESTIMONIALS } from '../../constants/copyData';
import { SectionHeading } from '../ui/SectionHeading';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';

export const Testimonials = () => {
  // Organiza em pares: pelo menos 2 depoimentos por slide
  const slides = [
    [TESTIMONIALS[0], TESTIMONIALS[1]],
    [TESTIMONIALS[2], TESTIMONIALS[3]],
    [TESTIMONIALS[4], TESTIMONIALS[0]] // Dupla para manter equilíbrio visual de 2 cards
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentPair = slides[currentSlide];

  return (
    <section id="depoimentos" className="py-24 bg-[#131b2e]/40 border-y border-white/5 relative md:pl-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Depoimentos Reais"
          title="O que dizem sobre nós"
          subtitle="A satisfação e o crescimento dos nossos parceiros e clientes são nossa maior comprovação de autoridade."
          align="right"
        />

        {/* Testimonials Slider - 2 depoimentos por slide */}
        <div className="relative my-8" data-aos="zoom-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {currentPair.map((item, idx) => (
              <div
                key={`${currentSlide}-${item.id}-${idx}`}
                id={`depoimento-card-${item.id}`}
                className="interactive-card bg-white/5 border border-white/10 hover:border-[#00AB4F]/60 hover:-translate-y-2 hover:shadow-[0_18px_38px_-10px_rgba(0,171,79,0.35)] rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-500 ease-out cursor-pointer"
              >
                {/* Glow decorativo de fundo */}
                <div className="absolute -top-10 -left-10 w-28 h-28 bg-[#00AB4F]/10 rounded-full filter blur-xl pointer-events-none" />

                <div className="space-y-5 relative z-10">
                  {/* Cabeçalho do Card: Avaliação com Estrelas & Aspas */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-[#00AB4F]">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-serif text-5xl text-white/10 select-none leading-none pointer-events-none">
                      “
                    </span>
                  </div>

                  {/* Texto do Depoimento */}
                  <p className="text-sm md:text-base text-gray-200 italic leading-relaxed font-light">
                    "{item.quote}"
                  </p>
                </div>

                {/* Autor & Empresa */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                  <div>
                    <h4 className="font-bold text-white text-base font-heading">
                      {item.author}
                    </h4>
                    <p className="text-xs text-[#00AB4F] font-bold tracking-wider mt-0.5 uppercase">
                      {item.company}
                    </p>
                  </div>

                  <span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-[#00AB4F]/10 text-[#00AB4F] border border-[#00AB4F]/20">
                    Cliente Verificado
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Controles de Navegação do Slider */}
          <div className="flex items-center justify-between mt-10">
            {/* Indicador de Páginas */}
            <div className="flex items-center space-x-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    currentSlide === idx ? 'w-8 bg-[#00AB4F]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Slide de depoimentos ${idx + 1}`}
                />
              ))}
            </div>

            {/* Botões Anterior / Próximo */}
            <div className="flex items-center space-x-3">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#00AB4F]/20 hover:border-[#00AB4F] text-gray-300 hover:text-white transition-all duration-500 focus:outline-none cursor-pointer"
                aria-label="Depoimentos Anteriores"
              >
                <ChevronLeftIcon className="w-5 h-5 stroke-[2.5]" />
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#00AB4F]/20 hover:border-[#00AB4F] text-gray-300 hover:text-white transition-all duration-500 focus:outline-none cursor-pointer"
                aria-label="Próximos Depoimentos"
              >
                <ChevronRightIcon className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Clientes Logos Panel */}
        <div id="clientes" className="mt-20 text-right space-y-6" data-aos="fade-up">
          <p className="text-xs font-bold text-[#00AB4F] uppercase tracking-widest">
            Clientes que confiam em nós
          </p>
          <div id="clientes-painel-logos" className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-black/40 p-2">
            <img
              src="/assets/img/parceiros/Painel-de-Logos-1920-x-1080-px-1-1536x864.png"
              alt="Painel de Logos de Clientes Achei Marketing"
              className="w-full h-auto rounded-2xl object-contain opacity-90 hover:opacity-100 transition duration-500"
              loading="lazy"
              width="1536"
              height="864"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
