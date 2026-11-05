import React, { useState } from 'react';
import { CONTACT_INFO } from '../../constants/contactLinks';
import { trackWhatsAppClick } from '../../utils/googleTags';

export const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      title: '📊 Análise Gratuita Google Ads',
      url: CONTACT_INFO.whatsappOptions.analise,
      label: 'AnaliseGratuita'
    },
    {
      title: '🚀 Mentoria Ads Pro Accelerate',
      url: CONTACT_INFO.whatsappOptions.mentoriaConhecer,
      label: 'Mentoria'
    },
    {
      title: '💼 Gestão / Consultoria de Tráfego',
      url: CONTACT_INFO.whatsappOptions.gestao,
      label: 'Gestao'
    },
    {
      title: '🤝 Parcerias & Ecossistema 360',
      url: CONTACT_INFO.whatsappOptions.parceria,
      label: 'Parcerias'
    }
  ];

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 flex flex-col items-end">
      {/* WhatsApp Options Popup */}
      {isOpen && (
        <div
          className="mb-4 w-72 sm:w-80 bg-[#131b2e] border border-[#00AB4F]/30 rounded-2xl p-4 shadow-2xl animate-fade-in-up"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center space-x-2 text-[#00AB4F]">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              <span className="text-xs font-bold text-white uppercase tracking-wider">Como podemos ajudar?</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors duration-500 p-1"
              aria-label="Fechar"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-2">
            {options.map((opt, i) => (
              <a
                key={i}
                href={opt.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick(opt.label);
                  setIsOpen(false);
                }}
                className="block w-full text-left bg-white/5 hover:bg-[#00AB4F]/15 border border-white/5 hover:border-[#00AB4F]/40 rounded-xl p-2.5 text-xs font-medium text-gray-300 hover:text-white transition-all duration-500 ease-out"
              >
                {opt.title}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#00AB4F] hover:bg-[#00853c] text-white w-13 h-13 md:w-14 md:h-14 rounded-full shadow-[0_0_24px_rgba(0,171,79,0.4)] transition-all duration-500 ease-out hover:scale-110 flex items-center justify-center relative focus:outline-none"
        aria-label="Opções do WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#00AB4F]/30 animate-ping pointer-events-none" />
        <svg className="w-6 h-6 md:w-7 md:h-7 relative z-10 fill-white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </button>
    </div>
  );
};

