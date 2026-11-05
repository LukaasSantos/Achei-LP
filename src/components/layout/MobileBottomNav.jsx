import React from 'react';
import {
  HomeIcon,
  BriefcaseIcon,
  SparklesIcon,
  UserGroupIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  CodeBracketIcon,
  BoltIcon,
  PaintBrushIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  MagnifyingGlassIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline';

export const MobileBottomNav = ({ activeSection, currentPage = 'home', onNavigate }) => {
  const homeLinks = [
    { id: 'hero', name: 'Início', href: '#hero', icon: HomeIcon },
    { id: 'solucoes', name: 'Soluções', href: '#solucoes', icon: BriefcaseIcon },
    { id: 'diferenciais', name: 'Diferenciais', href: '#diferenciais', icon: SparklesIcon },
    { id: 'equipe', name: 'Equipe', href: '#equipe', icon: UserGroupIcon },
    { id: 'mentoria', name: 'Mentoria', href: '#mentoria', icon: AcademicCapIcon },
    { id: 'contato', name: 'Contato', href: '#contato', icon: EnvelopeIcon }
  ];

  const parceirosLinks = [
    { id: 'home-return', name: 'Início', href: '#/', icon: HomeIcon },
    { id: 'topo', name: 'Parceiros', href: '#topo', icon: UserGroupIcon },
    { id: 'parceiro-devsampa', name: 'DevSampa', href: '#parceiro-devsampa', icon: CodeBracketIcon },
    { id: 'parceiro-k2k', name: 'K2K', href: '#parceiro-k2k', icon: BoltIcon },
    { id: 'parceiro-brit', name: 'Brit', href: '#parceiro-brit', icon: PaintBrushIcon },
    { id: 'seja-parceiro', name: 'Parceria', href: '#seja-parceiro', icon: HandRaisedIcon }
  ];

  const academyLinks = [
    { id: 'home-return', name: 'Início', href: '#/', icon: HomeIcon },
    { id: 'topo', name: 'Cronograma', href: '#topo', icon: AcademicCapIcon },
    { id: 'evento-pmax-masterclass', name: 'PMax', href: '#evento-pmax-masterclass', icon: RocketLaunchIcon },
    { id: 'evento-search-workshop', name: 'Busca', href: '#evento-search-workshop', icon: MagnifyingGlassIcon },
    { id: 'evento-imersao-presencial', name: 'Imersão', href: '#evento-imersao-presencial', icon: BuildingOffice2Icon },
    { id: 'falar-coordenador', name: 'Contato', href: '#falar-coordenador', icon: EnvelopeIcon }
  ];

  const navLinks =
    currentPage === 'parceiros'
      ? parceirosLinks
      : currentPage === 'academy'
        ? academyLinks
        : homeLinks;

  const handleLinkClick = (e, link) => {
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
    <nav
      className="md:hidden fixed bottom-3 left-3 right-3 z-[990] bg-[#131b2e]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.5)] px-2 py-2 flex items-center justify-around"
      aria-label="Navegação Móvel Flutuante"
    >
      {navLinks.map((link) => {
        const Icon = link.icon;
        const isActive = activeSection === link.id;

        return (
          <a
            key={link.id}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link)}
            className={`p-2 rounded-xl flex flex-col items-center justify-center transition-all duration-500 ease-out ${isActive
                ? 'text-white bg-[#00AB4F] scale-105 shadow-md font-bold'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            aria-label={link.name}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[9px] mt-0.5 tracking-tight font-medium">{link.name}</span>
          </a>
        );
      })}
    </nav>
  );
};
