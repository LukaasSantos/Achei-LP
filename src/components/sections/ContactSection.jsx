import React, { useState } from 'react';
import { CONTACT_INFO } from '../../constants/contactLinks';
import { trackContactFormSubmit, trackWhatsAppClick } from '../../utils/googleTags';
import { Button } from '../ui/Button';
import {
  PhoneIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    trackContactFormSubmit();

    // Converte para WhatsApp direto também para garantir que o lead nunca se perca!
    const encodedMessage = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}.\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nObjetivo: ${formData.message}`
    );
    window.open(`https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodedMessage}`, '_blank');

    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden md:pl-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div id="contato-card-principal" className="interactive-card bg-gradient-to-br from-[#131b2e] to-black border border-white/10 hover:border-[#00AB4F]/40 hover:-translate-y-1 hover:shadow-[0_14px_34px_-10px_rgba(0,171,79,0.25)] rounded-3xl p-8 md:p-14 shadow-2xl transition-all duration-500 ease-out">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left Column: Contact details & Social */}
            <div className="space-y-8" data-aos="fade-right">
              <div className="space-y-3 text-right flex flex-col items-end">
                <span className="inline-flex items-center space-x-2 text-[#00AB4F] text-xs font-bold uppercase tracking-widest p-0 bg-transparent border-0">
                  <span className="w-2 h-2 rounded-full bg-[#00AB4F] animate-pulse"></span>
                  <span>Contato Direto</span>
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading">
                  Pronto para revolucionar?
                </h2>
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed max-w-md">
                  Fale diretamente com nossa equipe especializada e agende seu diagnóstico gratuito de 10 pontos sem qualquer compromisso.
                </p>
                <div className="w-16 h-1 bg-[#00AB4F] rounded-full mt-1"></div>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3">
                <a
                  id="contato-canal-whatsapp"
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('ContatoCards')}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#00AB4F]/50 hover:bg-[#131b2e] hover:-translate-y-1.5 hover:shadow-[0_12px_28px_-8px_rgba(0,171,79,0.25)] transition-all duration-500 ease-out group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#00AB4F]/10 flex items-center justify-center text-[#00AB4F] group-hover:scale-105 transition-transform duration-500">
                    <PhoneIcon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">WhatsApp</p>
                    <p className="text-sm font-bold text-white group-hover:text-[#00AB4F] transition-colors duration-500">
                      {CONTACT_INFO.phone}
                    </p>
                  </div>
                </a>

                <a
                  id="contato-canal-email"
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#00AB4F]/50 hover:bg-[#131b2e] hover:-translate-y-1.5 hover:shadow-[0_12px_28px_-8px_rgba(0,171,79,0.25)] transition-all duration-500 ease-out group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#00AB4F]/10 flex items-center justify-center text-[#00AB4F] group-hover:scale-105 transition-transform duration-500 shrink-0">
                    <EnvelopeIcon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-400 font-medium">E-mail Corporativo</p>
                    <p className="text-sm font-bold text-white group-hover:text-[#00AB4F] transition-colors duration-500 break-all sm:break-normal">
                      {CONTACT_INFO.email}
                    </p>
                  </div>
                </a>
              </div>

              {/* Social Media */}
              <div className="space-y-3 pt-2">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Acompanhe-nos nas redes
                </p>
                <div className="flex items-center space-x-3">
                  {/* Instagram */}
                  <a
                    href={CONTACT_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#00AB4F]/20 hover:text-white text-gray-400 transition flex items-center justify-center border border-white/5"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={CONTACT_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#00AB4F]/20 hover:text-white text-gray-400 transition flex items-center justify-center border border-white/5"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" strokeWidth="2" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href={CONTACT_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#00AB4F]/20 hover:text-white text-gray-400 transition flex items-center justify-center border border-white/5"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="relative" data-aos="fade-left">
              <div className="absolute -inset-1 bg-gradient-to-r  rounded-3xl blur-xl opacity-60" />

              <div id="contato-box-formulario" className="relative bg-[#0b0f19]  border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#00AB4F]/10 flex items-center justify-center text-[#00AB4F]">
                      <CheckCircleIcon className="w-10 h-10 stroke-[2]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-heading">Diagnóstico Solicitado!</h3>
                    <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
                      Sua mensagem foi direcionada ao nosso time de ex-Googlers. Responderemos em minutos via WhatsApp ou E-mail.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      size="sm"
                    >
                      Enviar outra mensagem
                    </Button>
                  </div>
                ) : (
                  <form id="contato-form" onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white font-heading">
                        Solicite um Diagnóstico
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">
                        Preencha os campos abaixo para auditar sua conta de Google Ads.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-400">Nome Completo</label>
                      <input
                        type="text"
                        placeholder="Ex: João Silva"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00AB4F] focus:ring-1 focus:ring-[#00AB4F] transition"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-400">E-mail Corporativo</label>
                      <input
                        type="email"
                        placeholder="Ex: joao@empresa.com.br"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00AB4F] focus:ring-1 focus:ring-[#00AB4F] transition"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-400">WhatsApp / Telefone</label>
                      <input
                        type="tel"
                        placeholder="Ex: (11) 99999-9999"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00AB4F] focus:ring-1 focus:ring-[#00AB4F] transition"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-400">Mensagem / Cenário Atual</label>
                      <textarea
                        rows="3"
                        placeholder="Conte brevemente sobre o seu momento de tráfego..."
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00AB4F] focus:ring-1 focus:ring-[#00AB4F] transition resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="glow"
                      size="lg"
                      icon={<PaperAirplaneIcon className="w-4 h-4 stroke-[2]" />}
                      className="w-full"
                    >
                      Solicitar Diagnóstico Agora
                    </Button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

