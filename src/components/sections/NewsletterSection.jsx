import React, { useState } from 'react';
import { trackNewsletterSignup } from '../../utils/googleTags';
import { CheckCircleIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

export const NewsletterSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    trackNewsletterSignup(email);
    setIsSubmitted(true);
  };

  return (
    <section id="newsletter" className="py-16 bg-[#131b2e]/30 border-y border-white/5 relative md:pl-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center" data-aos="fade-up">
          
          {/* Left Heading */}
          <div className="md:col-span-5 space-y-2 text-right">
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight font-heading">
              Inscreva-se e receba novidades!
            </h3>
            <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
              Fique atualizado com as últimas tendências, estratégias e inteligência de tráfego pago direto no seu e-mail.
            </p>
          </div>

          {/* Right Form or Success */}
          <div id="newsletter-box-card" className="md:col-span-7">
            {isSubmitted ? (
              <div id="newsletter-sucesso-card" className="flex items-center space-x-3 p-4 bg-[#00AB4F]/10 border border-[#00AB4F]/30 rounded-2xl text-white">
                <CheckCircleIcon className="w-6 h-6 text-[#00AB4F] shrink-0" />
                <div>
                  <p className="text-sm font-bold text-white">Inscrição realizada com sucesso!</p>
                  <p className="text-xs text-gray-300">Obrigado por fazer parte da comunidade Achei Marketing.</p>
                </div>
              </div>
            ) : (
              <form id="newsletter-form" onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00AB4F] focus:ring-1 focus:ring-[#00AB4F] transition"
                />

                <input
                  type="email"
                  placeholder="Seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00AB4F] focus:ring-1 focus:ring-[#00AB4F] transition"
                />

                <button
                  type="submit"
                  className="bg-[#00AB4F] hover:bg-[#00853c] text-white rounded-xl px-6 py-3 font-semibold text-sm transition flex items-center justify-center space-x-2 shrink-0 cursor-pointer shadow-lg hover:shadow-[#00AB4F]/30"
                >
                  <span>Inscrever</span>
                  <PaperAirplaneIcon className="w-4 h-4 stroke-[2]" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

