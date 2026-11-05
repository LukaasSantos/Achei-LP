import React from 'react';
import { Button } from '../ui/Button';
import { CONTACT_INFO } from '../../constants/contactLinks';
import { trackWhatsAppClick } from '../../utils/googleTags';
import { CheckCircleIcon, ArrowRightIcon, AcademicCapIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

export const MentoriaSection = () => {
  return (
    <section id="mentoria" className="py-24 relative overflow-hidden bg-grid-pattern md:pl-24">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-[#00AB4F]/8 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-aos="fade-up">
        <div
          id="mentoria-accelerate-card"
          className="interactive-card bg-gradient-to-br from-[#131b2e] to-black border border-white/10 hover:border-[#00AB4F]/60 hover:-translate-y-2 hover:shadow-[0_18px_38px_-10px_rgba(0,171,79,0.35)] rounded-3xl p-8 md:p-14 shadow-2xl transition-all duration-500 ease-out"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-right flex flex-col items-end" data-aos="fade-right">
              {/* Badge sem fundo e sem borda alinhado à Academy */}
              <span className="inline-flex items-center space-x-2 text-[#00AB4F] text-xs font-bold uppercase tracking-widest p-0 bg-transparent border-0">
                <span className="w-2 h-2 rounded-full bg-[#00AB4F] animate-pulse"></span>
                <span>Achei Academy &bull; Aceleração Exclusiva</span>
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight font-heading text-right">
                Domine o Google Ads com a <br />
                <span className="text-[#00AB4F] text-gradient-primary">Achei Academy</span>
              </h2>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light text-right">
                Além de masterclasses e workshops pontuais, nossa Academy conta com o programa intensivo <strong>Ads Pro Accelerate</strong>: uma mentoria imersiva de 90 dias com ex-Googlers para você ou seu time dominarem a ferramenta por dentro e multiplicarem o faturamento das campanhas.
              </p>

              <ul className="space-y-3 pt-2 text-right">
                <li className="flex items-center justify-end gap-3 text-sm text-gray-200">
                  <span>Acesso direto ao cronograma de masterclasses e workshops práticos</span>
                  <CheckCircleIcon className="w-5 h-5 text-[#00AB4F] shrink-0 stroke-[2]" />
                </li>
                <li className="flex items-center justify-end gap-3 text-sm text-gray-200">
                  <span>Metodologia validada em mais de 400 contas corporativas do Google</span>
                  <CheckCircleIcon className="w-5 h-5 text-[#00AB4F] shrink-0 stroke-[2]" />
                </li>
                <li className="flex items-center justify-end gap-3 text-sm text-gray-200">
                  <span>Mentoria individual e suporte técnico para casos reais da sua empresa</span>
                  <CheckCircleIcon className="w-5 h-5 text-[#00AB4F] shrink-0 stroke-[2]" />
                </li>
              </ul>

              {/* Ações integradas à Academy e Mentoria */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4 w-full sm:w-auto">
                <Button
                  href="#/academy"
                  variant="outline"
                  size="md"
                  icon={<CalendarDaysIcon className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Ver Calendário da Academy
                </Button>

                <Button
                  href={CONTACT_INFO.whatsappOptions.mentoriaConhecer}
                  target="_blank"
                  variant="glow"
                  size="md"
                  onClick={() => trackWhatsAppClick('MentoriaAcademy')}
                  icon={<ArrowRightIcon className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Conhecer Mentoria Ads Pro
                </Button>
              </div>
            </div>

            {/* Right Images Showcase */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4" data-aos="fade-left">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-white/5">
                  <img
                    src="/assets/img/mentoria_google.jpg"
                    alt="Achei Academy Mentoria 1"
                    className="w-full h-auto object-cover opacity-90 hover:scale-105 transition duration-500"
                    loading="lazy"
                    width="260"
                    height="320"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-white/5">
                  <img
                    src="/assets/img/mentoria_google2.jpg"
                    alt="Achei Academy Mentoria 2"
                    className="w-full h-auto object-cover opacity-90 hover:scale-105 transition duration-500"
                    loading="lazy"
                    width="260"
                    height="320"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
