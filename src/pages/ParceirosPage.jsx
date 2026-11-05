import React, { useState, useEffect } from 'react';
import { PARCEIROS_LIST } from '../constants/pagesData';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { PartnerModal } from '../components/ui/PartnerModal';
import { CONTACT_INFO } from '../constants/contactLinks';
import { trackWhatsAppClick } from '../utils/googleTags';
import {
  CheckCircleIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  BriefcaseIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export const ParceirosPage = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);

  // Detecta se a URL contém um parâmetro ou âncora de parceiro (ex: #/parceiros?partner=k2k ou #parceiro-devsampa)
  useEffect(() => {
    const checkHashForPartner = () => {
      const hash = window.location.hash;
      const matchParam = hash.match(/[?&]partner=([a-zA-Z0-9_-]+)/);
      const matchAnchor = hash.match(/#parceiro-([a-zA-Z0-9_-]+)/);
      const partnerId = matchParam ? matchParam[1] : (matchAnchor ? matchAnchor[1] : null);

      if (partnerId) {
        const found = PARCEIROS_LIST.find((p) => p.id.toLowerCase() === partnerId.toLowerCase());
        if (found) {
          setSelectedPartner(found);
        }
      }
    };

    checkHashForPartner();
    window.addEventListener('hashchange', checkHashForPartner);
    return () => window.removeEventListener('hashchange', checkHashForPartner);
  }, []);

  const handleOpenModal = (partner) => {
    setSelectedPartner(partner);
  };

  const handleCloseModal = () => {
    setSelectedPartner(null);
    if (window.location.hash.includes('partner=') || window.location.hash.includes('parceiro-')) {
      window.history.replaceState(null, '', '#/parceiros');
    }
  };

  return (
    <div id="parceiros-pagina" className="pt-36 pb-20 md:pt-40 md:pb-28 md:pl-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading alinhado à direita */}
        <SectionHeading
          badge="Rede Estratégica"
          title="Ecossistema de Parceiros Achei"
          subtitle="Conectamos nossos clientes às melhores agências e profissionais homologados em tecnologia, branding, automação e desenvolvimento web para construir um ecossistema 360° de alto retorno."
          align="right"
        />

        {/* Partners Detailed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
          {PARCEIROS_LIST.map((partner, idx) => (
            <div
              key={partner.id}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className="h-full group pt-2.5 pb-2.5"
            >
              <div
                id={`parceiro-${partner.id}`}
                onClick={() => handleOpenModal(partner)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenModal(partner);
                  }
                }}
                className="h-full bg-[#131b2e]/90 border border-white/5 group-hover:border-[#00AB4F]/60 group-hover:-translate-y-2 group-hover:shadow-[0_18px_38px_-10px_rgba(0,171,79,0.35)] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-500 ease-out cursor-pointer text-left"
              >
                {/* Subtle Ambient Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#00AB4F]/5 rounded-full filter blur-2xl pointer-events-none group-hover:bg-[#00AB4F]/10 transition-colors duration-500" />

                <div className="space-y-6 relative z-10">
                  {/* Header do Card com Logo e Tag */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
                    <div className="h-14 w-auto flex items-center justify-center bg-black/30 p-2.5 rounded-2xl border border-white/5 shrink-0 group-hover:border-[#00AB4F]/30 transition-colors duration-500">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-9 w-auto object-contain filter contrast-125"
                        loading="lazy"
                        width="120"
                        height="36"
                      />
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="text-xs font-mono font-bold text-[#00AB4F] uppercase tracking-wider block">
                        {partner.tag}
                      </span>
                      <h3 className="text-xl font-bold text-white font-heading mt-0.5 group-hover:text-[#00AB4F] transition-colors duration-300">
                        {partner.name}
                      </h3>
                    </div>
                  </div>

                  {/* Categoria & Descrição */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      {partner.category}
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed font-light">
                      {partner.description}
                    </p>
                  </div>

                  {/* Destaque rápido de portfólio */}
                  {partner.portfolio && partner.portfolio.length > 0 && (
                    <div className="p-3.5 rounded-2xl bg-black/25 border border-white/5 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2 text-gray-300">
                        <BriefcaseIcon className="w-4 h-4 text-[#00AB4F]" />
                        <span>Portfólio: <strong>{partner.portfolio.length} cases reais</strong> disponíveis</span>
                      </div>
                      <span className="text-[#00AB4F] font-semibold text-[11px] underline underline-offset-2">
                        Ver cases
                      </span>
                    </div>
                  )}

                  {/* Projetos Realizados */}
                  <div className="space-y-2.5 pt-1">
                    <p className="text-xs font-bold text-white uppercase tracking-wider">
                      Especialidades & Projetos Entregues:
                    </p>
                    <ul className="space-y-2">
                      {partner.projects.map((proj, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-[#00AB4F] shrink-0 mt-0.5 stroke-[2.2]" />
                          <span>{proj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Botão de Ação: Abrir Modal */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between gap-4">
                  <span className="text-xs text-gray-500 font-medium">
                    Parceiro Homologado Achei
                  </span>

                  <Button
                    variant="glow"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(partner);
                    }}
                    icon={<ArrowRightIcon className="w-4 h-4" />}
                  >
                    Ver Detalhes & Cases
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner: Torne-se um Parceiro */}
        <div data-aos="fade-up" className="mt-16">
          <div
            id="seja-parceiro"
            className="interactive-card bg-gradient-to-r from-[#131b2e] via-black to-[#071329] border border-white/10 hover:border-[#00AB4F]/60 hover:-translate-y-2 hover:shadow-[0_18px_38px_-10px_rgba(0,171,79,0.35)] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden transition-all duration-500 ease-out"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-3 max-w-2xl">
                <span className="inline-flex items-center space-x-2 text-[#00AB4F] text-xs font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-[#00AB4F] animate-pulse"></span>
                  <span>Expansão da Rede</span>
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white font-heading">
                  Sua agência ou empresa quer ser homologada na Achei?
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  Estamos sempre expandindo nossa rede com profissionais de alto padrão em desenvolvimento, CRM e design para indicar aos nossos clientes com total confiança.
                </p>
              </div>

              <Button
                href={CONTACT_INFO.whatsappOptions.parceria}
                target="_blank"
                variant="outline"
                size="lg"
                onClick={() => trackWhatsAppClick('QueroSerParceiro')}
                icon={<ChatBubbleLeftRightIcon className="w-5 h-5" />}
                className="shrink-0"
              >
                Quero ser Parceiro
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Detalhes do Parceiro com Portfólio, Contatos e Projetos */}
      <PartnerModal
        partner={selectedPartner}
        isOpen={!!selectedPartner}
        onClose={handleCloseModal}
      />
    </div>
  );
};
