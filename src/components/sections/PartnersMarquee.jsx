import React from 'react';
import { PARCEIROS_LIST } from '../../constants/pagesData';
import { Button } from '../ui/Button';
import { ArrowRightIcon, SparklesIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

export const PartnersMarquee = () => {
  return (
    <section id="parceiros" className="py-20 bg-[#0b0f19]/95 overflow-hidden border-b border-white/5 relative md:pl-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Header alinhado à direita */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 text-right">
          <div className="md:order-2 space-y-2 text-right flex flex-col items-end">
            <span className="inline-flex items-center space-x-2 text-[#00AB4F] text-xs font-bold uppercase tracking-widest p-0 bg-transparent border-0">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>Ecossistema Integrado</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading text-right">
              Parceiros que trabalham conosco
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 font-light max-w-2xl ml-auto leading-relaxed text-right">
              Tráfego de Google Ads gera o dobro de resultado quando integrado com sites rápidos, identidade marcante e automação de CRM. Conheça as agências parceiras homologadas pela Achei.
            </p>
          </div>

          <div className="md:order-1 shrink-0">
            <Button
              href="#/parceiros"
              variant="outline"
              size="md"
              icon={<ArrowRightIcon className="w-4 h-4" />}
            >
              Ver Todos os Parceiros
            </Button>
          </div>
        </div>
      </div>

      {/* Grid de Parceiros: 3 Colunas e 2 Linhas Alinhados à Direita com Hitbox Anti-Glitch */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6 text-right">
          {PARCEIROS_LIST.map((partner) => (
            <a
              key={partner.id}
              id={`parceiro-home-${partner.id}`}
              href={`#/parceiros?partner=${partner.id}`}
              className="group relative block h-full pt-2.5 pb-2.5 cursor-pointer select-none text-right"
            >
              {/* Card visual que translada internamente sem mover a hitbox do <a> */}
              <div className="h-full bg-[#131b2e]/90 border border-white/10 group-hover:border-[#00AB4F]/70 rounded-3xl p-6 overflow-hidden flex flex-col justify-between min-h-[190px] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_45px_-10px_rgba(0,171,79,0.38)] text-right relative">
                {/* Glow ambiente no card no hover */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#00AB4F]/10 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Topo do Card: Tag à esquerda e Logo à direita */}
                <div className="relative z-10 flex items-center justify-between gap-3 flex-row-reverse">
                  <div className="h-12 w-28 sm:w-32 flex items-center justify-center bg-black/40 px-3 py-2 rounded-2xl border border-white/5 group-hover:border-[#00AB4F]/30 transition-colors duration-500 shrink-0">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-8 w-auto object-contain filter contrast-125 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                      width="120"
                      height="32"
                    />
                  </div>

                  <span className="text-[10px] font-mono font-bold text-[#00AB4F] uppercase tracking-wider bg-[#00AB4F]/10 px-2.5 py-1 rounded-full border border-[#00AB4F]/20 truncate">
                    {partner.tag}
                  </span>
                </div>

                {/* Informações alinhadas à direita */}
                <div className="relative z-10 mt-5 pt-3 border-t border-white/5 flex flex-col items-end text-right space-y-2 w-full">
                  <div className="w-full text-right">
                    <h3 className="text-base sm:text-lg font-bold text-white font-heading truncate group-hover:text-[#00AB4F] transition-colors duration-300 text-right">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-gray-300 font-light truncate mt-0.5 text-right">
                      {partner.category}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 w-full flex-row-reverse">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00AB4F] group-hover:text-white bg-[#00AB4F]/10 group-hover:bg-[#00AB4F] px-3.5 py-1.5 rounded-full transition-all duration-500 shadow-sm">
                      <span>Ver Mais</span>
                      <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>

                    <span className="text-[11px] text-gray-400 font-light">
                      {partner.portfolio ? `${partner.portfolio.length} cases reais` : 'Homologado'}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}

          {/* 6º Card com Hitbox Fixa Anti-Glitch */}
          <a
            id="parceiro-home-seja-parceiro"
            href="#/parceiros#seja-parceiro"
            className="group relative block h-full pt-2.5 pb-2.5 cursor-pointer select-none text-right"
          >
            <div className="h-full bg-gradient-to-br from-[#131b2e]/80 via-black/60 to-[#071329]/80 border border-dashed border-white/15 group-hover:border-[#00AB4F]/70 rounded-3xl p-6 overflow-hidden flex flex-col justify-between min-h-[190px] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_45px_-10px_rgba(0,171,79,0.38)] text-right relative">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#00AB4F]/10 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between gap-3 flex-row-reverse">
                <div className="h-12 w-28 sm:w-32 flex items-center justify-center bg-[#00AB4F]/10 px-3 py-2 rounded-2xl border border-[#00AB4F]/20 text-[#00AB4F] shrink-0">
                  <PlusCircleIcon className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
                </div>

                <span className="text-[10px] font-mono font-bold text-[#00AB4F] uppercase tracking-wider bg-[#00AB4F]/10 px-2.5 py-1 rounded-full border border-[#00AB4F]/20">
                  Expansão
                </span>
              </div>

              <div className="relative z-10 mt-5 pt-3 border-t border-white/5 flex flex-col items-end text-right space-y-2 w-full">
                <div className="w-full text-right">
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading group-hover:text-[#00AB4F] transition-colors duration-300 text-right">
                    Sua Empresa Aqui
                  </h3>
                  <p className="text-xs text-gray-300 font-light truncate mt-0.5 text-right">
                    Conecte sua agência ao ecossistema Achei
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 w-full flex-row-reverse">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/10 group-hover:bg-[#00AB4F] px-3.5 py-1.5 rounded-full transition-all duration-500 shadow-sm">
                    <span>Quero Ser Parceiro</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>

                  <span className="text-[11px] text-gray-400 font-light">
                    Seja homologado
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
