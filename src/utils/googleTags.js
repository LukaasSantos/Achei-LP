/**
 * Google Ads & Google Analytics Tags Tracking Utility
 */

const GOOGLE_TAG_ID = 'AW-123456789'; // Substituir pelo ID de produção quando fornecido

export const initGoogleTags = () => {
  if (typeof window === 'undefined') return;

  if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}"]`)) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', GOOGLE_TAG_ID);
  }
};

export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
};

export const trackWhatsAppClick = (label = 'Geral') => {
  trackEvent('click_whatsapp', {
    event_category: 'Contato',
    event_label: `WhatsApp - ${label}`,
    value: 1.0
  });
};

export const trackNewsletterSignup = (email) => {
  trackEvent('newsletter_signup', {
    event_category: 'Leads',
    event_label: 'Cadastro de Newsletter',
    user_email: email
  });
};

export const trackContactFormSubmit = () => {
  trackEvent('lead_form_submit', {
    event_category: 'Leads',
    event_label: 'Formulário de Diagnóstico',
    value: 10.0
  });
};

