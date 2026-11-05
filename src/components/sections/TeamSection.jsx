import React from 'react';
import { TEAM_MEMBERS } from '../../constants/copyData';
import { SectionHeading } from '../ui/SectionHeading';

export const TeamSection = () => {
  return (
    <section id="equipe" className="py-24 relative overflow-hidden md:pl-24">
      {/* Background radial glow */}
      <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-[#00AB4F]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Ex-Googlers"
          title="Conheça nossa equipe de especialistas"
          subtitle="Profissionais certificados com anos de atuação direta dentro do Google, dedicados a revolucionar sua performance de anúncios."
        />

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={member.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="h-full"
            >
              <div
                id={`equipe-card-${member.id}`}
                className="h-full bg-[#131b2e] border border-white/5 rounded-2xl overflow-hidden interactive-card group hover:border-[#00AB4F]/60 hover:-translate-y-2 hover:shadow-[0_18px_38px_-10px_rgba(0,171,79,0.35)] transition-all duration-500 ease-out shadow-xl cursor-pointer"
              >
                <div className="h-68 w-full bg-gray-900 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                    loading="lazy"
                    width="280"
                    height="300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 text-center space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00AB4F] transition font-heading">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#00AB4F] uppercase tracking-wider font-semibold">
                    {member.role}
                  </p>
                  <div className="pt-2 border-t border-white/5">
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      {member.experience}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

