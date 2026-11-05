import React from 'react';
import { CONTACT_INFO } from '../../constants/contactLinks';
import { trackWhatsAppClick } from '../../utils/googleTags';

export const MobileTopBar = ({ isVisible = true }) => {
  return (
    <header
      className={`md:hidden fixed top-0 left-0 right-0 z-[990] bg-[#0b0f19]/90 backdrop-blur-xl border-b border-white/10 px-4 py-3 flex items-center justify-between transition-transform duration-300 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <a href="#hero" className="flex items-center space-x-2">
        <img
          src="/assets/img/logo_rodape.png"
          alt="Achei Marketing Digital"
          className="h-8 w-auto object-contain"
          width="120"
          height="32"
        />
      </a>

      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('MobileTop')}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00AB4F] text-white text-xs font-bold shadow-md hover:bg-[#00853c] transition-colors"
      >
        <span>Análise Grátis</span>
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </header>
  );
};

