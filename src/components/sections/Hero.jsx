import React from 'react';
import { Button } from '../ui/Button';
import { CONTACT_INFO } from '../../constants/contactLinks';
import { trackWhatsAppClick } from '../../utils/googleTags';
import { TypewriterText } from '../ui/TypewriterText';
import { ArrowDownIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center pt-36 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/assets/img/bgHero.jpg')` }}
    >
      {/* Leve overlay azul escuro conforme solicitado */}
      <div className="absolute inset-0 bg-[#070e24]/75 backdrop-blur-[1px]" />

      {/* Gradientes decorativos para profundidade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-[#070e24]/60 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#00AB4F]/10 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Conteúdo posicionado no lado direito e alinhado à direita */}
        <div className="flex justify-end w-full">
          <div
            id="hero-conteudo"
            className="w-full max-w-3xl text-right flex flex-col items-end space-y-6"
            data-aos="fade-left"
          >
            {/* Título com fonte ampliada e animação de escrever letra por letra */}
            <h1 id="hero-titulo" className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-[1.16] tracking-tight text-white font-heading">
              Somos a <br />
              <span className="text-[#00AB4F] text-gradient-primary block mt-1">
                <TypewriterText
                  words={[
                    'agência das agências',
                    'referência em Google Ads',
                    'sua equipe de ex-Googlers'
                  ]}
                  speed={85}
                  deleteSpeed={40}
                  pause={2200}
                />
              </span>
            </h1>

            {/* Descrição com fonte ampliada e alinhada à direita */}
            <p id="hero-descricao" className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed font-light">
              Não perca tempo procurando por aí. Aqui você acha o que procura. Pode dizer para todo mundo:{' '}
              <span className="text-white font-semibold">O que precisava, Achei!</span>
            </p>

            <p id="hero-tagline" className="text-sm sm:text-base md:text-lg text-[#00AB4F] font-semibold tracking-wide">
              Revolucione sua empresa com quem entende do assunto por dentro do Google.
            </p>

            {/* Botões alinhados à direita */}
            <div id="hero-botoes" className="flex flex-col sm:flex-row items-center justify-end gap-3.5 pt-3 w-full sm:w-auto">
              <Button
                id="hero-btn-servicos"
                href="#solucoes"
                variant="outline"
                size="md"
                icon={<ArrowDownIcon className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Nossos Serviços
              </Button>

              <Button
                id="hero-btn-fale-conosco"
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                variant="glow"
                size="md"
                onClick={() => trackWhatsAppClick('HeroFaleConosco')}
                icon={<ChatBubbleLeftRightIcon className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
