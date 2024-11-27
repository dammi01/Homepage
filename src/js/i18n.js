// Import all translations
import en from '../locales/en.js';
import de from '../locales/de.js';
import pt from '../locales/pt.js';
import es from '../locales/es.js';

const translations = { en, de, pt, es };

class I18n {
  constructor() {
    this.currentLang = 'en';
    this.translations = translations;
  }

  setLanguage(lang) {
    if (this.translations[lang]) {
      this.currentLang = lang;
      this.updateDOM();
      localStorage.setItem('preferredLanguage', lang);
      
      // Update language buttons state
      document.querySelectorAll('.language-dropdown button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });
    }
  }

  t(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];
    
    for (const k of keys) {
      if (value === undefined) {
        console.log(`Translation missing for key: ${key} in language: ${this.currentLang}`);
        return key;
      }
      value = value[k];
    }
    
    return value || key;
  }

  updateDOM() {
    console.log('Updating translations for language:', this.currentLang);

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = this.t(key);
      console.log(`Translating key: ${key} to: ${translation}`);

      if (translation && translation !== key) {
        const tagName = element.tagName.toLowerCase();
        
        // Handle form elements
        if (tagName === 'input' || tagName === 'textarea') {
          // Only update placeholder, not value
          element.placeholder = translation;
        } else {
          // For non-form elements, update text content
          element.textContent = translation;
        }
      }
    });

    // Update the document title
    document.title = `${this.t('name')} - ${this.t('title')}`;

    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language: this.currentLang }
    }));
  }

  init() {
    console.log('Initializing i18n');
    // Load preferred language from localStorage
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && this.translations[savedLang]) {
      this.currentLang = savedLang;
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (this.translations[browserLang]) {
        this.currentLang = browserLang;
      }
    }
    
    console.log('Current language:', this.currentLang);
    // Initial translation
    this.updateDOM();
    
    // Set initial active state for language buttons
    document.querySelectorAll('.language-dropdown button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
    });
  }
}

export const i18n = new I18n();
export default i18n;
