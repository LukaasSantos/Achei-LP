/**
 * Google Ads & Google Analytics Tags Manager Module
 * Centraliza e simplifica o rastreamento de eventos e conversões da Landing Page.
 */

// Configure aqui o ID do Google Ads (AW-XXXXX) ou Google Analytics (G-XXXXX)
const GOOGLE_TAG_ID = 'AW-123456789'; // Substitua pelo ID real do cliente

// Inicialização do Google Tag Manager/gtag
function initGoogleTags() {
  if (typeof window !== 'undefined') {
    // Cria o script da tag global
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', GOOGLE_TAG_ID);
    console.log(`[GoogleTags] Inicializado com ID: ${GOOGLE_TAG_ID}`);
  }
}

/**
 * Dispara um evento de conversão genérico
 * @param {string} eventName Nome do evento (ex: 'conversion', 'click')
 * @param {object} params Parâmetros adicionais (ex: send_to, value, currency)
 */
function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
    console.log(`[GoogleTags] Evento disparado: ${eventName}`, params);
  } else {
    console.warn(`[GoogleTags] Evento '${eventName}' não enviado. Tag não carregada ou gtag inexistente.`, params);
  }
}

/**
 * Conversão específica para cliques no botão de WhatsApp / Contato
 */
function trackWhatsAppClick() {
  trackEvent('click_whatsapp', {
    'event_category': 'Contato',
    'event_label': 'Clique no WhatsApp',
    'value': 1.0
  });
  
  // Exemplo de conversão de lead do Google Ads
  // trackEvent('conversion', {
  //   'send_to': 'AW-123456789/ConversionLabelXYZ',
  //   'value': 1.0,
  //   'currency': 'BRL'
  // });
}

/**
 * Conversão específica para inscrição na Newsletter
 */
function trackNewsletterSignup(email) {
  trackEvent('newsletter_signup', {
    'event_category': 'Leads',
    'event_label': 'Cadastro de Newsletter',
    'user_email': email // Opcional, dependendo da conformidade de privacidade
  });
}

/**
 * Conversão para cliques na Mentoria
 * @param {string} actionType 'conhecer' ou 'comprar'
 */
function trackMentoriaClick(actionType) {
  trackEvent('mentoria_click', {
    'event_category': 'Mentoria',
    'event_label': `Clique em ${actionType} mentoria`
  });
}

// Inicializa automaticamente ao carregar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGoogleTags);
} else {
  initGoogleTags();
}

// Exporta as funções para uso global (disponível no script.js)
window.AcheiTags = {
  trackWhatsAppClick,
  trackNewsletterSignup,
  trackMentoriaClick,
  trackEvent
};
