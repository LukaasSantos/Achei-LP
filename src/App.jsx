import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { initGoogleTags } from './utils/googleTags';
import { TopFloatingMenu } from './components/layout/TopFloatingMenu';
import { ConvexSidebar } from './components/layout/ConvexSidebar';
import { MobileTopBar } from './components/layout/MobileTopBar';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloat } from './components/layout/WhatsAppFloat';

import { Hero } from './components/sections/Hero';
import { StatsCounter } from './components/sections/StatsCounter';
import { SolutionsTabs } from './components/sections/SolutionsTabs';
import { Differentials } from './components/sections/Differentials';
import { TeamSection } from './components/sections/TeamSection';
import { Testimonials } from './components/sections/Testimonials';
import { PartnersMarquee } from './components/sections/PartnersMarquee';
import { ValuesSection } from './components/sections/ValuesSection';
import { MentoriaSection } from './components/sections/MentoriaSection';
import { FaqSection } from './components/sections/FaqSection';
import { NewsletterSection } from './components/sections/NewsletterSection';
import { ContactSection } from './components/sections/ContactSection';

import { ParceirosPage } from './pages/ParceirosPage';
import { AcademyPage } from './pages/AcademyPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeSection, setActiveSection] = useState('hero');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Monitora scroll para auto-hide do header mobile e sincronização do menu de páginas
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > 70) {
            setIsHeaderVisible(currentScrollY < lastScrollY);
          } else {
            setIsHeaderVisible(true);
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Inicializações
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60
    });

    initGoogleTags();
  }, []);

  // Monitora hash routing para trocar de página sem sobrescrever âncoras internas
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/parceiros') || hash === '#parceiros-page') {
        setCurrentPage('parceiros');
      } else if (hash.startsWith('#/academy') || hash === '#academy-page') {
        setCurrentPage('academy');
      } else if (
        hash === '#/' ||
        hash === '' ||
        hash.startsWith('#hero') ||
        hash.startsWith('#solucoes') ||
        hash.startsWith('#diferenciais') ||
        hash.startsWith('#equipe') ||
        hash.startsWith('#depoimentos') ||
        hash.startsWith('#mentoria') ||
        hash.startsWith('#faq') ||
        hash.startsWith('#contato')
      ) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // IntersectionObserver para detectar a seção ativa dinamicamente por página
  useEffect(() => {
    let sections = [];

    if (currentPage === 'home') {
      sections = [
        'hero',
        'solucoes',
        'diferenciais',
        'equipe',
        'depoimentos',
        'mentoria',
        'faq',
        'contato'
      ];
    } else if (currentPage === 'parceiros') {
      sections = [
        'topo',
        'parceiro-devsampa',
        'parceiro-k2k',
        'parceiro-brit',
        'parceiro-rainbow',
        'parceiro-es',
        'seja-parceiro'
      ];
    } else if (currentPage === 'academy') {
      sections = [
        'topo',
        'evento-pmax-masterclass',
        'evento-search-workshop',
        'evento-imersao-presencial',
        'evento-treinamento-incompany',
        'falar-coordenador'
      ];
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentPage]);

  const handlePageNavigation = (pageId) => {
    setCurrentPage(pageId);
    if (pageId === 'home') {
      window.location.hash = '#/';
    } else {
      window.location.hash = `#/${pageId}`;
    }
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden flex flex-col bg-[#0b0f19] text-gray-100 selection:bg-[#00AB4F] selection:text-white">
      {/* Menu Flutuante no Topo (3 menus: Início, Parceiros, Academy) */}
      <TopFloatingMenu
        currentPage={currentPage}
        onNavigate={handlePageNavigation}
        isHeaderVisible={isHeaderVisible}
      />

      {/* Convex Left Sidebar (Desktop) - Adaptado por página */}
      <ConvexSidebar
        activeSection={activeSection}
        currentPage={currentPage}
        onNavigate={handlePageNavigation}
      />

      {/* Auto-Hide Top Bar (Mobile) */}
      <MobileTopBar isVisible={isHeaderVisible} />

      {/* Conteúdo Dinâmico Baseado na Página Ativa */}
      <main className="flex-1 pb-16 md:pb-0">
        {currentPage === 'home' && (
          <div id="home-pagina">
            <Hero />
            <StatsCounter />
            <SolutionsTabs />
            <Differentials />
            <TeamSection />
            <Testimonials />
            <PartnersMarquee />
            <ValuesSection />
            <MentoriaSection />
            <FaqSection />
            <NewsletterSection />
            <ContactSection />
          </div>
        )}

        {currentPage === 'parceiros' && (
          <ParceirosPage />
        )}

        {currentPage === 'academy' && (
          <AcademyPage />
        )}
      </main>

      {/* Rodapé */}
      <div className="pb-16 md:pb-0">
        <Footer />
      </div>

      {/* Mobile Floating Bottom Nav - Adaptado por página */}
      <MobileBottomNav
        activeSection={activeSection}
        currentPage={currentPage}
        onNavigate={handlePageNavigation}
      />

      {/* Floating Multi-Option WhatsApp Widget */}
      <WhatsAppFloat />
    </div>
  );
}

export default App;
