import React from 'react';
import { ACADEMY_EVENTS } from '../constants/pagesData';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { CONTACT_INFO } from '../constants/contactLinks';
import { trackWhatsAppClick } from '../utils/googleTags';
import {
  CalendarDaysIcon,
  ClockIcon,
  UserIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export const AcademyPage = () => {
  return (
    <div id="academy-pagina" className="pt-36 pb-20 md:pt-40 md:pb-28 md:pl-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading alinhado à direita e sem fundo no badge */}
        <SectionHeading
          badge="Achei Academy"
          title="Treinamentos, Palestras & Masterclasses"
          subtitle="Capacitação técnica de alta densidade ministrada exclusivamente por ex-Googlers. Datas confirmadas de aulas práticas, workshops e imersões para você dominar o algoritmo de tráfego pago."
          align="right"
        />

        {/* Events Schedule Grid */}
        <div className="space-y-8 my-12">
          {ACADEMY_EVENTS.map((event, idx) => (
            <div
              key={event.id}
              data-aos="fade-up"
              data-aos-delay={idx * 70}
              className="w-full"
            >
              <div
                id={`evento-${event.id}`}
                className="interactive-card bg-[#131b2e]/90 border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-[#00AB4F]/60 hover:-translate-y-2 hover:shadow-[0_18px_38px_-10px_rgba(0,171,79,0.35)] transition-all duration-500 ease-out cursor-pointer"
              >
                {/* Subtle Ambient Radial Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AB4F]/5 rounded-full filter blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Left Meta: Data, Horário e Instrutor */}
                  <div className="lg:col-span-4 space-y-4 border-b lg:border-b-0 lg:border-r border-white/5 pb-6 lg:pb-0 lg:pr-8">
                    <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#00AB4F] uppercase tracking-wider">
                      <SparklesIcon className="w-4 h-4 stroke-[2]" />
                      <span>{event.badge}</span>
                    </span>

                    <div className="space-y-2 pt-2">
                      <div className="flex items-center gap-2.5 text-white font-bold text-base">
                        <CalendarDaysIcon className="w-5 h-5 text-[#00AB4F] shrink-0" />
                        <span>{event.date}</span>
                      </div>

                      <div className="flex items-center gap-2.5 text-gray-400 text-xs font-medium">
                        <ClockIcon className="w-4 h-4 text-[#00AB4F] shrink-0" />
                        <span>{event.time}</span>
                      </div>

                      <div className="flex items-start gap-2.5 text-gray-300 text-xs pt-2">
                        <UserIcon className="w-4 h-4 text-[#00AB4F] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-white block">{event.instructor}</span>
                          <span className="text-gray-400 text-[11px] font-light">{event.instructorRole}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3">
                      <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] font-mono text-gray-300">
                        {event.spots}
                      </span>
                    </div>
                  </div>

                  {/* Right Details: Título, Descrição, Tópicos e Botão */}
                  <div className="lg:col-span-8 space-y-5">
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-300 font-light leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Tópicos Abordados */}
                    <div className="space-y-2.5 pt-1">
                      <p className="text-xs font-bold text-[#00AB4F] uppercase tracking-wider">
                        O que será abordado na sessão:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {event.topics.map((topic, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2 text-xs text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-[#00AB4F] shrink-0 mt-0.5 stroke-[2]" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA e Status */}
                    <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/5">
                      <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        {event.status}
                      </span>

                      <Button
                        href={`https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent(event.whatsappMsg)}`}
                        target="_blank"
                        variant="glow"
                        size="md"
                        onClick={() => trackWhatsAppClick(`Academy_${event.id}`)}
                        icon={<ArrowRightIcon className="w-4 h-4" />}
                      >
                        Garantir Minha Vaga
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* In-Company Banner */}
        <div data-aos="fade-up" className="mt-16">
          <div
            id="falar-coordenador"
            className="interactive-card bg-gradient-to-br from-[#131b2e] to-black border border-white/10 hover:border-[#00AB4F]/60 hover:-translate-y-2 hover:shadow-[0_18px_38px_-10px_rgba(0,171,79,0.35)] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden transition-all duration-500 ease-out"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-3 max-w-2xl">
                <span className="inline-flex items-center space-x-2 text-[#00AB4F] text-xs font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-[#00AB4F] animate-pulse"></span>
                  <span>Treinamentos Corporativos</span>
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white font-heading">
                  Quer levar a Achei Academy para dentro da sua agência ou empresa?
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  Formatamos palestras exclusivas e workshops sob medida para os colaboradores da sua empresa com foco direto nos desafios da sua operação.
                </p>
              </div>

              <Button
                href={`https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent('Olá! Gostaria de falar sobre treinamento In-Company da Achei Academy para meu time.')}`}
                target="_blank"
                variant="outline"
                size="lg"
                onClick={() => trackWhatsAppClick('AcademyInCompany')}
                className="shrink-0"
              >
                Falar com Coordenador
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
