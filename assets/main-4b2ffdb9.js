import Typed from 'typed.js';
import i18n from './i18n.js';

// Skills data
const skillsData = {
  programming: [
    { name: 'Python', icon: 'bxl-python' },
    { name: 'JavaScript', icon: 'bxl-javascript' },
    { name: 'Java', icon: 'bxl-java' },
    { name: 'PHP', icon: 'bxl-php' },
    { name: 'C++', icon: 'bx-code-alt' },
  ],
  databases: [
    { name: 'MySQL', icon: 'bx-data' },
    { name: 'PostgreSQL', icon: 'bx-data' },
    { name: 'MongoDB', icon: 'bx-data' },
    { name: 'Oracle', icon: 'bx-data' },
  ],
  tools: [
    { name: 'Git', icon: 'bxl-git' },
    { name: 'Docker', icon: 'bxl-docker' },
    { name: 'AWS', icon: 'bxl-aws' },
    { name: 'Linux', icon: 'bxl-tux' },
    { name: 'VS Code', icon: 'bx-code-block' },
  ]
};

// Portfolio data
const portfolioData = [
  // Add portfolio items here if needed
];

// Initialize Typed.js
let typedInstance = null;  // Add this line to store the Typed instance

function initTypedJs() {
  // Destroy existing instance if it exists
  if (typedInstance) {
    typedInstance.destroy();
  }

  const options = {
    strings: [i18n.t('title')],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 8000,
    startDelay: 1000,
    loop: true
  };

  typedInstance = new Typed('.typed-text', options);
}

// Header scroll effect
function initHeaderScroll() {
  const header = document.querySelector('.header');
  const scrollThreshold = 50;

  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Mobile menu functionality
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-right')) {
      navbar.classList.remove('active');
    }
  });
}

// Language selector functionality
function initLanguageSelector() {
  const languageSelector = document.querySelector('.language-selector');
  const languageButton = languageSelector.querySelector('.language-button');
  const languageDropdown = languageSelector.querySelector('.language-dropdown');

  // Toggle dropdown
  languageButton.addEventListener('click', () => {
    languageDropdown.classList.toggle('show');
  });

  // Handle language selection
  languageDropdown.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-lang');
      i18n.setLanguage(lang);
      languageDropdown.classList.remove('show');
      
      // Update button text
      const buttonText = languageButton.querySelector('span');
      buttonText.textContent = i18n.t('languageMenu');

      // Reinitialize Typed.js with new language
      initTypedJs();
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!languageSelector.contains(e.target)) {
      languageDropdown.classList.remove('show');
    }
  });
}

// Skills section
function initSkills() {
  const skillsLists = {
    programming: document.querySelector('.skills-category:nth-child(1) .skills-list'),
    databases: document.querySelector('.skills-category:nth-child(2) .skills-list'),
    tools: document.querySelector('.skills-category:nth-child(3) .skills-list')
  };

  // Populate skills
  Object.entries(skillsData).forEach(([category, skills]) => {
    const container = skillsLists[category];
    if (!container) return;

    skills.forEach(skill => {
      const skillElement = document.createElement('div');
      skillElement.className = 'skill-item fade-in';
      skillElement.innerHTML = `
        <i class='bx ${skill.icon}'></i>
        <span>${skill.name}</span>
      `;
      container.appendChild(skillElement);
    });
  });
}

// Portfolio section
function initPortfolio() {
  const portfolioGrid = document.querySelector('.portfolio-grid');

  portfolioData.forEach(project => {
    const projectElement = document.createElement('article');
    projectElement.className = 'portfolio-item fade-in';
    projectElement.innerHTML = `
      <img src="${project.image}" alt="${project.title}" loading="lazy">
      <div class="portfolio-item-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="portfolio-item-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <a href="${project.link}" class="btn btn-primary" target="_blank">View Project</a>
      </div>
    `;
    portfolioGrid.appendChild(projectElement);
  });
}

// Contact form
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.innerHTML = `
    <div class="form-row">
      <div class="form-group">
        <input type="text" id="name" name="name" required placeholder="Your Name">
      </div>
      <div class="form-group">
        <input type="email" id="email" name="email" required placeholder="Your Email">
      </div>
    </div>
    <div class="form-group">
      <input type="text" id="subject" name="subject" required placeholder="Subject">
    </div>
    <div class="form-group">
      <textarea id="message" name="message" rows="5" required placeholder="Your Message"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Send Message</button>
  `;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  });
}

// Intersection Observer for animations
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
}

// Update copyright year
function updateCopyright() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Theme toggle functionality
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('i');
  
  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme === 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon(false);
  }
  
  // Toggle theme
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme === 'dark');
  });
}

function updateThemeIcon(isDark) {
  const themeIcon = document.getElementById('theme-toggle').querySelector('i');
  themeIcon.className = isDark ? 'bx bx-moon' : 'bx bx-sun';
}

// Resume download functionality
function downloadResume(e) {
  e.preventDefault(); // Prevent the default anchor behavior
  
  const lang = getCurrentLanguage();
  const resumeUrls = {
    'en': '/assets/resumes/Michael_Dambock_Resume_EN.pdf',
    'de': '/assets/resumes/Michael_Dambock_Resume_DE.pdf',
    'es': '/assets/resumes/Michael_Dambock_Resume_ES.pdf',
    'pt': '/assets/resumes/Michael_Dambock_Resume_PT.pdf'
  };

  const resumeUrl = resumeUrls[lang];
  
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.setAttribute('download', `Michael_Dambock_Resume_${lang.toUpperCase()}.pdf`);
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Add event listener to resume download button
document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('download-cv');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', downloadResume);
  }
});

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize i18n
  i18n.init();

  // Initialize theme toggle
  initThemeToggle();

  // Initialize all components
  initTypedJs();
  initHeaderScroll();
  initMobileMenu();
  initLanguageSelector();
  initSkills();
  initPortfolio();
  initContactForm();
  initAnimations();
  updateCopyright();

  // Listen for language changes
  window.addEventListener('languageChanged', () => {
    // Reinitialize components that depend on translations
    initTypedJs();
  });
});
