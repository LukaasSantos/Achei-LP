import React from 'react';
import { CONTACT_INFO } from '../../constants/contactLinks';
import { trackWhatsAppClick } from '../../utils/googleTags';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

export const Footer = () => {
  return (
    <footer id="rodape" className="bg-[#050811] text-gray-400 pt-16 pb-12 border-t border-white/10 relative z-20 md:pl-20 lg:pl-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Principal de 4 Colunas - Centralizado no Mobile */}
        <div id="footer-grid-principal" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          
          {/* Coluna 1: Sobre a Achei (4 colunas) */}
          <div id="footer-col-sobre" className="lg:col-span-4 space-y-4 flex flex-col items-center text-center md:items-start md:text-left">
            <a href="#/" className="inline-block mx-auto md:mx-0">
              <img
                src="/assets/img/logo_rodape.png"
                alt="Achei Marketing Digital - A Agência das Agências"
                className="h-16 md:h-20 w-auto object-contain"
                width="280"
                height="80"
              />
            </a>

            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-sm mx-auto md:mx-0">
              Somos a agência das agências. Uma equipe formada por quem já foi Googler, dedicada a auditar, gerenciar e revolucionar contas de Google Ads com estratégias reais e parcerias sólidas.
            </p>

            <div className="space-y-2 pt-2 text-xs text-gray-400 font-light flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPinIcon className="w-4 h-4 text-[#00AB4F] shrink-0" />
                <span>São Paulo - SP &bull; Atendimento em todo o Brasil</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <ClockIcon className="w-4 h-4 text-[#00AB4F] shrink-0" />
                <span>Segunda a Sexta, das 09h às 18h</span>
              </div>
            </div>
          </div>

          {/* Coluna 2: Soluções & Serviços (3 colunas) */}
          <div id="footer-col-solucoes" className="lg:col-span-3 space-y-3 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Soluções Especializadas
            </h4>
            <ul className="space-y-2 text-xs w-full max-w-xs md:max-w-none">
              <li>
                <a href="#solucoes" className="hover:text-[#00AB4F] transition-colors duration-500 ease-out flex items-center justify-center md:justify-between group">
                  <span>Diagnóstico de 10 Pontos</span>
                  <span className="text-[10px] text-[#00AB4F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ml-1.5 md:ml-0">Grátis</span>
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-[#00AB4F] transition-colors duration-500 ease-out block text-center md:text-left">
                  Suporte 360° & Auditoria Scrab
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-[#00AB4F] transition-colors duration-500 ease-out block text-center md:text-left">
                  Consultoria Estratégica Avançada
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-[#00AB4F] transition-colors duration-500 ease-out block text-center md:text-left">
                  Gestão Completa de Google Ads
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-[#00AB4F] transition-colors duration-500 ease-out block text-center md:text-left">
                  Otimização de Performance Max (PMax)
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-[#00AB4F] transition-colors duration-500 ease-out block text-center md:text-left">
                  Setup de Enhanced Conversions & Tags
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Ecossistema & Conhecimento (2 colunas) */}
          <div id="footer-col-ecossistema" className="lg:col-span-2 space-y-3 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Ecossistema
            </h4>
            <ul className="space-y-2 text-xs w-full max-w-xs md:max-w-none">
              <li>
                <a href="#/parceiros" className="hover:text-[#00AB4F] transition-colors duration-500 ease-out flex items-center justify-center md:justify-start gap-1 text-white font-medium">
                  <span>Parceiros Homologados</span>
                  <ArrowTopRightOnSquareIcon className="w-3 h-3 text-[#00AB4F]" />
                </a>
              </li>
              <li>
                <a href="#/academy" className="hover:text-[#00AB4F] transition-colors duration-500 ease-out flex items-center justify-center md:justify-start gap-1 text-white font-medium">
                  <span>Achei Academy</span>
                  <ArrowTopRightOnSquareIcon className="w-3 h-3 text-[#00AB4F]" />
                </a>
              </li>
              <li>
                <a href="#mentoria" className="hover:text-[#00AB4F] transition-colors duration-500 ease-out block text-center md:text-left">
                  Mentoria Ads Pro
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-[#00AB4F] transition-colors duration-500 ease-out block text-center md:text-left">
                  Especialistas Ex-Googlers
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00AB4F] transition-colors duration-500 ease-out block text-center md:text-left">
                  Tire suas Dúvidas (FAQ)
                </a>
              </li>
              <li>
                <a href="#/parceiros#seja-parceiro" className="hover:text-[#00AB4F] transition-colors duration-500 ease-out block text-center md:text-left">
                  Seja um Parceiro
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Canais de Contato & Redes (3 colunas) */}
          <div id="footer-col-contato" className="lg:col-span-3 space-y-4 flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              Canais Diretos
            </h4>

            <div className="space-y-2.5 w-full max-w-xs">
              <a
                id="footer-canal-whatsapp"
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('FooterWhatsApp')}
                className="flex items-center justify-center md:justify-start gap-2.5 p-2.5 rounded-xl bg-white/5 hover:bg-[#00AB4F]/10 border border-white/5 hover:border-[#00AB4F]/30 hover:-translate-y-0.5 transition-all duration-500 ease-out text-xs text-white group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#00AB4F]/20 flex items-center justify-center text-[#00AB4F] group-hover:scale-105 transition-transform duration-500 shrink-0">
                  <PhoneIcon className="w-3.5 h-3.5 stroke-[2]" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-gray-400">WhatsApp Oficial</span>
                  <span className="font-bold text-white group-hover:text-[#00AB4F] transition-colors duration-500">{CONTACT_INFO.phone}</span>
                </div>
              </a>

              <a
                id="footer-canal-email"
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center justify-center md:justify-start gap-2.5 p-2.5 rounded-xl bg-white/5 hover:bg-[#00AB4F]/10 border border-white/5 hover:border-[#00AB4F]/30 hover:-translate-y-0.5 transition-all duration-500 ease-out text-xs text-white group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#00AB4F]/20 flex items-center justify-center text-[#00AB4F] group-hover:scale-105 transition-transform duration-500 shrink-0">
                  <EnvelopeIcon className="w-3.5 h-3.5 stroke-[2]" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <span className="block text-[10px] text-gray-400">E-mail Corporativo</span>
                  <span className="font-medium text-white group-hover:text-[#00AB4F] transition-colors duration-500 break-all sm:break-normal block">{CONTACT_INFO.email}</span>
                </div>
              </a>
            </div>

            {/* Redes Sociais */}
            <div id="footer-redes-sociais" className="pt-1 flex flex-col items-center md:items-start">
              <span className="block text-[10px] text-gray-400 uppercase tracking-wider mb-2 font-semibold">
                Siga-nos nas redes
              </span>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <a
                  id="footer-rede-instagram"
                  href={CONTACT_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#00AB4F]/20 hover:text-white text-gray-400 transition-all duration-500 flex items-center justify-center border border-white/5 hover:scale-105"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" />
                  </svg>
                </a>
                <a
                  id="footer-rede-linkedin"
                  href={CONTACT_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#00AB4F]/20 hover:text-white text-gray-400 transition-all duration-500 flex items-center justify-center border border-white/5 hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" strokeWidth="2" />
                  </svg>
                </a>
                <a
                  id="footer-rede-facebook"
                  href={CONTACT_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#00AB4F]/20 hover:text-white text-gray-400 transition-all duration-500 flex items-center justify-center border border-white/5 hover:scale-105"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Rodapé Inferior: Copyright & Selos Homologados - Centralizado no Mobile */}
        <div id="footer-barra-inferior" className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400 text-center md:text-left">
          <div className="text-center md:text-left space-y-1 max-w-xl">
            <p>&copy; {new Date().getFullYear()} Achei Marketing Digital. Todos os direitos reservados.</p>
            <p className="text-[11px] text-gray-500">Google Ads é uma marca registrada da Google LLC. Somos uma agência parceira independente especializada na plataforma.</p>
          </div>

          {/* Selos de Parceiros Oficiais */}
          <div id="footer-selos-parceiros" className="flex items-center space-x-4 bg-white/5 px-4 py-2 rounded-2xl border border-white/5 shrink-0 mx-auto md:mx-0">
            <img
              src="/assets/img/meta_partner.png"
              alt="Meta Business Partner"
              className="h-7 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
              width="90"
              height="28"
            />
            <div className="w-[1px] h-6 bg-white/10" />
            <img
              src="/assets/img/google_partner.png"
              alt="Google Premier Partner"
              className="h-7 w-auto object-contain opacity-80 hover:opacity-100 transition duration-300"
              width="90"
              height="28"
            />
          </div>
        </div>

      </div>
    </footer>
  );
};
