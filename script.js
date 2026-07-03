/**
 * Achei Marketing Digital - SPA Interactions & Event Tracking
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- INICIALIZAÇÃO DO AOS (Animate on Scroll) ---
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true, // Anima apenas uma vez ao entrar na tela
      mirror: false, // Não reanima ao rolar para cima
      offset: 100
    });

    // Força uma atualização dos offsets após carregar todas as imagens e estilos
    window.addEventListener('load', () => {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    });
  }

  // --- COUNTER / ANIMACAO DE NUMEROS DOS STATS ---
  const counters = document.querySelectorAll('.counter');

  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const format = counter.getAttribute('data-format');
    const duration = 2000; // 2 segundos de duração total
    const stepTime = 30; // ms por frame (aproximadamente 33fps)
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        current = target;
      }

      // Formatação
      if (format === 'currency') {
        counter.innerText = Math.floor(current).toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
      } else {
        counter.innerText = Math.floor(current).toLocaleString('pt-BR');
      }
    }, stepTime);
  };

  // Disparar a animação quando a seção de Stats estiver visível na tela
  if (counters.length > 0) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach(c => animateCounter(c));
          observer.unobserve(entry.target); // Executa apenas uma vez
        }
      });
    }, { threshold: 0.1 });

    const statsSection = counters[0].closest('section');
    if (statsSection) {
      statsObserver.observe(statsSection);
    }
  }

  // --- MOBILE MENU TOGGLE ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const iconOpen = mobileMenuBtn.querySelector('.icon-open');
      const iconClose = mobileMenuBtn.querySelector('.icon-close');
      if (iconOpen && iconClose) {
        iconOpen.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const iconOpen = mobileMenuBtn.querySelector('.icon-open');
        const iconClose = mobileMenuBtn.querySelector('.icon-close');
        if (iconOpen && iconClose) {
          iconOpen.classList.remove('hidden');
          iconClose.classList.add('hidden');
        }
      });
    });
  }

  // --- SPA HASH ROUTER ---
  const routeViews = {
    '#/': '#home-view',
    '#/sobre-nos': '#sobre-nos-view',
    '#/mentoria': '#mentoria-view'
  };

  const routes = {
    '#/': ['#hero', '#stats', '#solucoes', '#parceiros', '#diferenciais', '#depoimentos', '#clientes', '#newsletter', '#faq'],
    '#/sobre-nos': ['#sobre-nos-hero', '#equipe', '#valores'],
    '#/mentoria': ['#mentoria-hero', '#mentoria']
  };

  const handleRouting = () => {
    let currentHash = window.location.hash || '#/';

    // Suporte para âncoras internas de seções
    let targetSection = null;
    let activeRoute = currentHash;

    if (currentHash.startsWith('#') && !currentHash.startsWith('#/')) {
      targetSection = currentHash;
      // Encontra qual rota virtual possui esta seção
      for (const [route, sections] of Object.entries(routes)) {
        if (sections.includes(targetSection)) {
          activeRoute = route;
          break;
        }
      }
    }

    // Se a rota ativa não for reconhecida, volta para a home
    if (!routes[activeRoute]) {
      activeRoute = '#/';
    }

    // Rola imediatamente para o topo (antes de exibir/animar)
    if (!targetSection) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // Exibe apenas a view da rota ativa
    Object.keys(routeViews).forEach(route => {
      const viewSelector = routeViews[route];
      const viewEl = document.querySelector(viewSelector);
      if (viewEl) {
        if (route === activeRoute) {
          viewEl.classList.add('active');
        } else {
          viewEl.classList.remove('active');
        }
      }
    });

    // Atualiza o link ativo no header (desktop e mobile)
    const menuLinks = document.querySelectorAll('.nav-link, #mobile-menu a');
    menuLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === activeRoute) {
        link.classList.add('active', 'text-[#00AB4F]');
        link.classList.remove('text-gray-300', 'text-gray-400');
      } else {
        link.classList.remove('active', 'text-[#00AB4F]');
        link.classList.add('text-gray-300');
      }
    });

    // Se houver âncora específica, rola até ela instantaneamente
    if (targetSection) {
      setTimeout(() => {
        const targetEl = document.querySelector(targetSection);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
      }, 50);
    }

    // Força o reset das animações removendo a classe 'aos-animate' de todos os elementos
    const aosElements = document.querySelectorAll('[data-aos]');
    aosElements.forEach(el => {
      el.classList.remove('aos-animate');
    });

    // Atualiza/Reinicializa o AOS.js se ele existir, usando refreshHard para garantir reinicialização completa
    if (typeof AOS !== 'undefined') {
      setTimeout(() => {
        if (typeof AOS.refreshHard === 'function') {
          AOS.refreshHard();
        } else {
          AOS.refresh();
        }
      }, 100);
    }
  };

  // Monitora alterações de hash e inicia a rota atual
  window.addEventListener('hashchange', handleRouting);
  handleRouting();

  // --- ACORDEÃO DO FAQ ---
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const button = item.querySelector('.accordion-trigger');
    const content = item.querySelector('.accordion-content');
    const icon = item.querySelector('.accordion-icon');

    if (button && content) {
      button.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Fecha todos os outros acordeões
        accordionItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherContent = otherItem.querySelector('.accordion-content');
            const otherIcon = otherItem.querySelector('.accordion-icon');
            if (otherContent) otherContent.style.maxHeight = null;
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
          }
        });

        // Toggle do item atual
        if (isActive) {
          item.classList.remove('active');
          content.style.maxHeight = null;
          if (icon) icon.style.transform = 'rotate(0deg)';
        } else {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    }
  });

  // --- CARROSSEL DE DEPOIMENTOS ---
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');
  let currentSlide = 0;

  function showSlide(index) {
    if (slides.length === 0) return;

    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    slides.forEach((slide, idx) => {
      slide.classList.add('hidden', 'opacity-0');
      slide.classList.remove('flex');
      if (idx === currentSlide) {
        slide.classList.remove('hidden');
        // Pequeno timeout para transição de opacidade suave
        setTimeout(() => {
          slide.classList.add('flex', 'opacity-100');
        }, 20);
      }
    });
  }

  if (prevBtn && nextBtn && slides.length > 0) {
    prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

    // Auto play a cada 8 segundos
    let autoPlayInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 8000);

    // Reseta o auto play quando interage manualmente
    const resetAutoPlay = () => {
      clearInterval(autoPlayInterval);
      autoPlayInterval = setInterval(() => {
        showSlide(currentSlide + 1);
      }, 8000);
    };

    prevBtn.addEventListener('click', resetAutoPlay);
    nextBtn.addEventListener('click', resetAutoPlay);

    // Inicializa o carrossel na primeira página
    showSlide(0);
  }

  // --- DADOS DOS VALORES (Alternância Dinâmica de Tabs) ---
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabTarget = button.getAttribute('data-tab');

      tabButtons.forEach(btn => {
        btn.classList.remove('border-[#00AB4F]', 'text-[#00AB4F]', 'bg-[#00AB4F]/10');
        btn.classList.add('border-transparent', 'text-gray-400');
      });

      tabPanels.forEach(panel => {
        panel.classList.add('hidden');
      });

      button.classList.add('border-[#00AB4F]', 'text-[#00AB4F]', 'bg-[#00AB4F]/10');
      button.classList.remove('border-transparent', 'text-gray-400');

      const activePanel = document.getElementById(tabTarget);
      if (activePanel) {
        activePanel.classList.remove('hidden');
      }
    });
  });

  // --- NEWSLETTER FORM SUBMIT & GOOGLE TAGS ---
  const newsletterForm = document.getElementById('newsletter-form');
  const formSuccessState = document.getElementById('form-success');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      const nameInput = document.getElementById('newsletter-name');

      if (emailInput && emailInput.value) {
        // Envia para o rastreador
        if (window.AcheiTags && window.AcheiTags.trackNewsletterSignup) {
          window.AcheiTags.trackNewsletterSignup(emailInput.value);
        }

        // Exibe mensagem de sucesso com animação
        newsletterForm.classList.add('hidden');
        if (formSuccessState) {
          formSuccessState.classList.remove('hidden');
          formSuccessState.classList.add('flex');
        }

        // Limpa formulário
        newsletterForm.reset();
      }
    });
  }

  // --- CONTACT FORM SUBMIT ---
  const contactForm = document.getElementById('contact-form');
  const contactSuccessState = document.getElementById('contact-form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const phone = document.getElementById('contact-phone').value;
      const message = document.getElementById('contact-message').value;

      if (name && email && phone) {
        // Envia para o rastreador
        if (window.AcheiTags && window.AcheiTags.trackEvent) {
          window.AcheiTags.trackEvent('contact_form_submit', {
            'event_category': 'Contato',
            'event_label': 'Formulário de Diagnóstico',
            'user_name': name,
            'user_email': email
          });
        }

        // Exibe mensagem de sucesso com animação
        contactForm.classList.add('hidden');
        if (contactSuccessState) {
          contactSuccessState.classList.remove('hidden');
          contactSuccessState.classList.add('flex');
        }

        // Limpa formulário
        contactForm.reset();
      }
    });
  }

  // --- WHATSAPP WIDGET POPUP ---
  const wpBtn = document.getElementById('whatsapp-float-btn');
  const wpPopup = document.getElementById('whatsapp-popup');
  const wpClose = document.getElementById('whatsapp-popup-close');

  if (wpBtn && wpPopup) {
    const togglePopup = () => {
      if (wpPopup.classList.contains('hidden')) {
        // Exibir popup
        wpPopup.classList.remove('hidden');
        setTimeout(() => {
          wpPopup.classList.remove('scale-95', 'opacity-0');
          wpPopup.classList.add('scale-100', 'opacity-100');
        }, 10);
      } else {
        // Esconder popup com transição
        wpPopup.classList.add('scale-95', 'opacity-0');
        wpPopup.classList.remove('scale-100', 'opacity-100');
        setTimeout(() => {
          wpPopup.classList.add('hidden');
        }, 300);
      }
    };

    wpBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePopup();
    });

    if (wpClose) {
      wpClose.addEventListener('click', (e) => {
        e.stopPropagation();
        wpPopup.classList.add('scale-95', 'opacity-0');
        wpPopup.classList.remove('scale-100', 'opacity-100');
        setTimeout(() => {
          wpPopup.classList.add('hidden');
        }, 300);
      });
    }

    // Fechar ao clicar fora do popup
    document.addEventListener('click', (e) => {
      if (!wpPopup.contains(e.target) && e.target !== wpBtn && !wpBtn.contains(e.target)) {
        if (!wpPopup.classList.contains('hidden')) {
          wpPopup.classList.add('scale-95', 'opacity-0');
          wpPopup.classList.remove('scale-100', 'opacity-100');
          setTimeout(() => {
            wpPopup.classList.add('hidden');
          }, 300);
        }
      }
    });

    // Rastrear cliques nas opções do popup do WhatsApp
    const optionButtons = wpPopup.querySelectorAll('a');
    optionButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.AcheiTags && window.AcheiTags.trackWhatsAppClick) {
          window.AcheiTags.trackWhatsAppClick();
        }
      });
    });
  }

  // --- REGISTRO DE EVENTOS GOOGLE ADS / TRACKING ---
  // Rastrear cliques no WhatsApp (Gerais da página)
  const whatsappButtons = document.querySelectorAll('[href*="wa.me"], [href*="whatsapp.com"]');
  whatsappButtons.forEach(btn => {
    // Ignorar os botões do widget que já possuem listener próprio acima
    if (!btn.classList.contains('whatsapp-option-btn')) {
      btn.addEventListener('click', () => {
        if (window.AcheiTags && window.AcheiTags.trackWhatsAppClick) {
          window.AcheiTags.trackWhatsAppClick();
        }
      });
    }
  });

  // Rastrear cliques na mentoria
  const mentoriaQueroConhecer = document.getElementById('btn-mentoria-conhecer');
  const mentoriaQueroComprar = document.getElementById('btn-mentoria-comprar');

  if (mentoriaQueroConhecer) {
    interactiveClickTracker(mentoriaQueroConhecer, 'conhecer');
  }

  if (mentoriaQueroComprar) {
    interactiveClickTracker(mentoriaQueroComprar, 'comprar');
  }

  function interactiveClickTracker(element, type) {
    element.addEventListener('click', () => {
      if (window.AcheiTags && window.AcheiTags.trackMentoriaClick) {
        window.AcheiTags.trackMentoriaClick(type);
      }
    });
  }
});
