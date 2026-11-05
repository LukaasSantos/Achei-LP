import React, { useEffect } from 'react';
import {
  XMarkIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
  ArrowTopRightOnSquareIcon,
  BriefcaseIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { Button } from './Button';
import { CONTACT_INFO } from '../../constants/contactLinks';
import { trackWhatsAppClick } from '../../utils/googleTags';

export const PartnerModal = ({ partner, isOpen, onClose }) => {
  // Fecha com a tecla ESC e trava o scroll da página enquanto o modal estiver aberto
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !partner) return null;

  const whatsappHref = `https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent(partner.whatsappMsg || `Olá! Gostaria de falar com o parceiro ${partner.name} através da Achei.`)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="partner-modal-title"
      className="fixed inset-0 z-[99999] modal-z-max flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92dvh] sm:max-h-[90vh] flex flex-col bg-[#111726] border border-white/10 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,171,79,0.35)] overflow-hidden text-left animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow de ambientação no topo */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00AB4F]/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="relative z-10 px-6 sm:px-8 py-5 border-b border-white/5 flex items-center justify-between gap-4 bg-[#131b2e]/90 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="h-14 w-28 sm:w-32 flex items-center justify-center bg-black/40 p-2.5 rounded-2xl border border-white/10 shrink-0">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-9 w-auto object-contain filter contrast-125"
                loading="lazy"
                width="120"
                height="36"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-mono font-bold text-[#00AB4F] uppercase tracking-wider bg-[#00AB4F]/10 px-2.5 py-0.5 rounded-full border border-[#00AB4F]/20">
                  {partner.tag || 'Parceiro Estratégico'}
                </span>
                <span className="text-[10px] text-gray-400 font-medium hidden sm:inline-block">
                  Homologado Achei
                </span>
              </div>
              <h2 id="partner-modal-title" className="text-xl sm:text-2xl font-extrabold text-white font-heading mt-1">
                {partner.name}
              </h2>
            </div>
          </div>

          {/* Botão de Fechar */}
          <button
            type="button"
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10 transition-all duration-300 focus:outline-none"
            aria-label="Fechar modal"
          >
            <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="relative z-10 overflow-y-auto px-6 sm:px-8 py-6 space-y-8 custom-scrollbar">
          {/* Categoria e Descrição */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-[#00AB4F] uppercase tracking-wider">
              {partner.category}
            </p>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
              {partner.description}
            </p>
          </div>

          {/* Destaques / Stats do Parceiro */}
          {partner.stats && (
            <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
              <div>
                <span className="block text-lg sm:text-2xl font-black text-white font-heading">
                  {partner.stats.projetos}
                </span>
                <span className="text-[11px] sm:text-xs text-gray-400">Projetos Concluídos</span>
              </div>
              <div className="border-x border-white/5">
                <span className="block text-lg sm:text-2xl font-black text-[#00AB4F] font-heading">
                  {partner.stats.satisfacao}
                </span>
                <span className="text-[11px] sm:text-xs text-gray-400">Índice de Satisfação</span>
              </div>
              <div>
                <span className="block text-lg sm:text-2xl font-black text-white font-heading">
                  {partner.stats.velocidade}
                </span>
                <span className="text-[11px] sm:text-xs text-gray-400">Padrão de Entrega</span>
              </div>
            </div>
          )}

          {/* Dados de Contato e Canais Diretos */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Canais Oficiais & Dados de Contato
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {partner.website && (
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-[#00AB4F]/40 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-[#00AB4F]/10 text-[#00AB4F] group-hover:scale-105 transition-transform">
                    <GlobeAltIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[11px] text-gray-400">Website Oficial</span>
                    <span className="block text-xs sm:text-sm font-semibold text-white truncate group-hover:text-[#00AB4F] transition-colors flex items-center gap-1">
                      {partner.website.replace(/^https?:\/\//, '')}
                      <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 opacity-60" />
                    </span>
                  </div>
                </a>
              )}

              {partner.email && (
                <a
                  href={`mailto:${partner.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-[#00AB4F]/40 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-[#00AB4F]/10 text-[#00AB4F] group-hover:scale-105 transition-transform">
                    <EnvelopeIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[11px] text-gray-400">E-mail Corporativo</span>
                    <span className="block text-xs sm:text-sm font-semibold text-white truncate group-hover:text-[#00AB4F] transition-colors">
                      {partner.email}
                    </span>
                  </div>
                </a>
              )}

              {partner.phone && (
                <a
                  href={`tel:${partner.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-[#00AB4F]/40 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-[#00AB4F]/10 text-[#00AB4F] group-hover:scale-105 transition-transform">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[11px] text-gray-400">Telefone / WhatsApp</span>
                    <span className="block text-xs sm:text-sm font-semibold text-white truncate group-hover:text-[#00AB4F] transition-colors">
                      {partner.phone}
                    </span>
                  </div>
                </a>
              )}

              {partner.location && (
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="p-2 rounded-lg bg-[#00AB4F]/10 text-[#00AB4F]">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[11px] text-gray-400">Sede & Atendimento</span>
                    <span className="block text-xs sm:text-sm font-semibold text-white truncate">
                      {partner.location}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Cards de Projetos de Portfólio */}
          {partner.portfolio && partner.portfolio.length > 0 && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <BriefcaseIcon className="w-5 h-5 text-[#00AB4F]" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Cases de Portfólio & Projetos Realizados
                  </h3>
                </div>
                <span className="text-xs text-gray-400">
                  {partner.portfolio.length} cases em destaque
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {partner.portfolio.map((item, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-4 rounded-2xl bg-[#141d30] border border-white/10 hover:border-[#00AB4F]/50 flex flex-col justify-between space-y-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5 truncate max-w-[170px]">
                          {item.client}
                        </span>
                        <SparklesIcon className="w-3.5 h-3.5 text-[#00AB4F] shrink-0" />
                      </div>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-300 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>

                    <div className="space-y-2.5 pt-2 border-t border-white/5">
                      {item.metrics && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#00AB4F]/15 border border-[#00AB4F]/30 text-[#00AB4F] text-[11px] font-semibold">
                          <span>{item.metrics}</span>
                        </div>
                      )}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {item.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] text-gray-400 bg-black/30 px-2 py-0.5 rounded border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Especialidades da Empresa */}
          {partner.projects && partner.projects.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Escopo de Atuação Homologado
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {partner.projects.map((proj, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-300"
                  >
                    <CheckCircleIcon className="w-4 h-4 text-[#00AB4F] shrink-0 mt-0.5 stroke-[2.2]" />
                    <span>{proj}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="relative z-10 px-6 sm:px-8 py-4 border-t border-white/5 bg-[#131b2e]/95 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-400 text-center sm:text-left">
            Conexão direta mediada pelo time Achei Marketing Digital
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              Fechar
            </Button>

            <Button
              href={whatsappHref}
              target="_blank"
              variant="glow"
              size="sm"
              onClick={() => {
                trackWhatsAppClick(`Modal_${partner.id}`);
              }}
              icon={<ArrowTopRightOnSquareIcon className="w-4 h-4" />}
              className="w-full sm:w-auto whitespace-nowrap"
            >
              {partner.cta || `Falar com ${partner.name}`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

