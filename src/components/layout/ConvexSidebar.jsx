import React from 'react';
import { CONTACT_INFO } from '../../constants/contactLinks';
import { trackWhatsAppClick } from '../../utils/googleTags';
import {
  HomeIcon,
  BriefcaseIcon,
  SparklesIcon,
  UserGroupIcon,
  ChatBubbleBottomCenterTextIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon,
  CodeBracketIcon,
  BoltIcon,
  PaintBrushIcon,
  VideoCameraIcon,
  MegaphoneIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  MagnifyingGlassIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline';

export const ConvexSidebar = ({ activeSection, currentPage = 'home', onNavigate }) => {
  // Menus dinâmicos para a página Home
  const homeLinks = [
    { id: 'hero', name: 'Início', href: '#hero', icon: HomeIcon },
    { id: 'solucoes', name: 'Soluções', href: '#solucoes', icon: BriefcaseIcon },
    { id: 'diferenciais', name: 'Diferenciais', href: '#diferenciais', icon: SparklesIcon },
    { id: 'equipe', name: 'Equipe Ex-Googlers', href: '#equipe', icon: UserGroupIcon },
    { id: 'depoimentos', name: 'Depoimentos', href: '#depoimentos', icon: ChatBubbleBottomCenterTextIcon },
    { id: 'mentoria', name: 'Mentoria Ads', href: '#mentoria', icon: AcademicCapIcon },
    { id: 'faq', name: 'Dúvidas', href: '#faq', icon: QuestionMarkCircleIcon },
    { id: 'contato', name: 'Contato', href: '#contato', icon: EnvelopeIcon }
  ];

  // Menus dinâmicos para a página Parceiros
  const parceirosLinks = [
    { id: 'home-return', name: 'Voltar ao Início', href: '#/', icon: HomeIcon },
    { id: 'topo', name: 'Ecossistema', href: '#topo', icon: UserGroupIcon },
    { id: 'parceiro-devsampa', name: 'DevSampa (Web)', href: '#parceiro-devsampa', icon: CodeBracketIcon },
    { id: 'parceiro-k2k', name: 'K2K (Inbound)', href: '#parceiro-k2k', icon: BoltIcon },
    { id: 'parceiro-brit', name: 'Brit (Branding)', href: '#parceiro-brit', icon: PaintBrushIcon },
    { id: 'parceiro-rainbow', name: 'Rainbow (Vídeo)', href: '#parceiro-rainbow', icon: VideoCameraIcon },
    { id: 'parceiro-es', name: 'ES (Comunicação)', href: '#parceiro-es', icon: MegaphoneIcon },
    { id: 'seja-parceiro', name: 'Seja Parceiro', href: '#seja-parceiro', icon: HandRaisedIcon }
  ];

  // Menus dinâmicos para a página Academy
  const academyLinks = [
    { id: 'home-return', name: 'Voltar ao Início', href: '#/', icon: HomeIcon },
    { id: 'topo', name: 'Cronograma', href: '#topo', icon: AcademicCapIcon },
    { id: 'evento-pmax-masterclass', name: 'PMax (18/Nov)', href: '#evento-pmax-masterclass', icon: RocketLaunchIcon },
    { id: 'evento-search-workshop', name: 'Busca & CPC (02/Dez)', href: '#evento-search-workshop', icon: MagnifyingGlassIcon },
    { id: 'evento-imersao-presencial', name: 'Imersão SP (15/Jan)', href: '#evento-imersao-presencial', icon: BuildingOffice2Icon },
    { id: 'evento-treinamento-incompany', name: 'In-Company', href: '#evento-treinamento-incompany', icon: BriefcaseIcon },
    { id: 'falar-coordenador', name: 'Falar c/ Coordenador', href: '#falar-coordenador', icon: EnvelopeIcon }
  ];

  const navLinks =
    currentPage === 'parceiros'
      ? parceirosLinks
      : currentPage === 'academy'
      ? academyLinks
      : homeLinks;

  const offsets = [
    'translate-x-[36px]',
    'translate-x-[44px]',
    'translate-x-[50px]',
    'translate-x-[54px]',
    'translate-x-[54px]',
    'translate-x-[50px]',
    'translate-x-[44px]',
    'translate-x-[36px]'
  ];

  const handleLinkClick = (e, link) => {
    // Se o link for para voltar à home
    if (link.href === '#/' || link.id === 'home-return') {
      e.preventDefault();
      if (onNavigate) {
        onNavigate('home');
      } else {
        window.location.hash = '#/';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Se o link for uma âncora dentro da página atual
    if (link.href.startsWith('#') && !link.href.startsWith('#/')) {
      e.preventDefault();
      const targetId = link.href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <aside
      className="fixed left-0 top-0 bottom-0 h-screen w-[135px] z-[999] hidden md:flex flex-col items-start justify-between py-4 convex-sidebar-container pointer-events-none"
      aria-label="Navegação Lateral Achei"
    >
      {/* SVG Arc Background */}
      <svg
        className="convex-svg-bg"
        viewBox="0 0 135 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="sidebarDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0b0f19" />
            <stop offset="50%" stopColor="#131b2e" />
            <stop offset="100%" stopColor="#0b0f19" />
          </linearGradient>
          <linearGradient id="sidebarStrokeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 171, 79, 0.2)" />
            <stop offset="50%" stopColor="rgba(0, 171, 79, 0.6)" />
            <stop offset="100%" stopColor="rgba(0, 171, 79, 0.2)" />
          </linearGradient>
        </defs>
        <path
          d="M 0 0 Q 135 500 0 1000 Z"
          fill="url(#sidebarDarkGrad)"
          stroke="url(#sidebarStrokeGrad)"
          strokeWidth="1.5"
        />
      </svg>

      {/* Top Logo */}
      <div className="translate-x-[6px] md:translate-x-[10px] pointer-events-auto pt-2">
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate('home');
            else window.location.hash = '#/';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="p-2.5 rounded-2xl bg-[#131b2e]/95 text-white hover:border-[#00AB4F] transition-all duration-500 ease-out hover:scale-105 group relative inline-flex items-center justify-center shadow-xl border border-white/10"
          aria-label="Voltar ao início"
        >
          <img
            src="/assets/img/logo_rodape.png"
            alt="Achei Marketing Digital"
            className="w-32 md:w-36 h-auto object-contain opacity-100"
            width="144"
            height="44"
          />
          <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#131b2e] border border-[#00AB4F]/50 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap shadow-2xl z-50">
            Achei Marketing
          </span>
        </a>
      </div>

      {/* Radial Navigation Items */}
      <nav className="flex flex-col gap-2.5 my-auto w-full pointer-events-auto">
        {navLinks.map((link, index) => {
          const Icon = link.icon;
          const isActive = activeSection === link.id;
          const offsetClass = offsets[index] || 'translate-x-[40px]';

          return (
            <div key={link.id} className={`${offsetClass} transition-transform duration-500`}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`relative group p-2.5 rounded-xl transition-all duration-500 ease-out inline-flex items-center justify-center shadow-md ${
                  isActive
                    ? 'bg-[#00AB4F] text-white border border-[#00AB4F] scale-110 shadow-[0_0_16px_rgba(0,171,79,0.5)]'
                    : 'bg-[#131b2e] text-gray-300 hover:text-white hover:bg-[#1a253e] hover:border-[#00AB4F]/40 hover:scale-105 border border-white/5'
                }`}
                aria-label={link.name}
              >
                <Icon className="w-5 h-5 transition-transform duration-500 stroke-[2.2]" />

                {/* Tooltip on hover */}
                <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#131b2e] border border-[#00AB4F]/40 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap shadow-2xl z-50 flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#00AB4F]' : 'bg-gray-400'}`} />
                  {link.name}
                </span>
              </a>
            </div>
          );
        })}
      </nav>

      {/* WhatsApp CTA at Bottom Arc */}
      <div className="translate-x-[8px] pointer-events-auto pb-3">
        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('Sidebar')}
          className="group relative p-3 rounded-2xl bg-[#00AB4F] text-white hover:bg-[#00853c] transition-all duration-500 ease-out hover:scale-110 border border-white/20 shadow-[0_0_20px_rgba(0,171,79,0.4)] inline-flex items-center justify-center"
          aria-label="Falar no WhatsApp"
        >
          <svg
            className="w-6 h-6 fill-white"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#131b2e] border border-[#00AB4F] text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 whitespace-nowrap shadow-2xl z-50">
            Falar no WhatsApp
          </span>
        </a>
      </div>
    </aside>
  );
};
