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

  // Open/close dropdown function
  function toggleDropdown() {
    languageDropdown.classList.toggle('show');
  }

  // Open dropdown on button click
  languageButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent event from bubbling
    toggleDropdown(); // Toggle dropdown visibility
  });

  // Handle language selection
  languageDropdown.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (event) => {
      const lang = button.getAttribute('data-lang');
      i18n.setLanguage(lang); // Update language
      const buttonText = languageButton.querySelector('span');
      buttonText.textContent = i18n.t('languageMenu'); // Update button text
      updateResumeLink(); // Update resume link for new language
      initTypedJs(); // Reinitialize Typed.js with new language

      // Optionally close the dropdown immediately after selection
      languageDropdown.classList.remove('show');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!languageSelector.contains(e.target) && languageDropdown.classList.contains('show')) {
      languageDropdown.classList.remove('show'); // Close dropdown if it's open
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

  // Initialize EmailJS
  (function() {
    emailjs.init("upNg11-NKtYgaKIbd");
  })();

  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Disable submit button and show loading state
    submitButton.disabled = true;
    const originalText = submitButton.textContent;
    submitButton.textContent = '...';

    // Get form data
    const templateParams = {
      from_name: document.getElementById('name').value,
      from_email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
      to_email: 'mdambock@gmail.com'
    };

    // Send email using EmailJS
    emailjs.send('service_vffyv1s', 'template_cpu8xrf', templateParams)
      .then(function() {
        // Show success message
        showNotification('Message sent successfully!', 'success');
        
        // Reset form
        form.reset();
      })
      .catch(function(error) {
        // Show error message
        showNotification('Failed to send message. Please try again.', 'error');
        console.error('EmailJS error:', error);
      })
      .finally(function() {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      });
  });
}

// Notification system
function showNotification(message, type) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;

  // Add to document
  document.body.appendChild(notification);

  // Add show class for animation
  setTimeout(() => notification.classList.add('show'), 10);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Smooth scroll to contact section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

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
  e.preventDefault();
  const lang = localStorage.getItem('preferredLanguage') || 'en';
  window.open(`/Homepage/assets/resumes/Michael_Dambock_Resume_${lang.toUpperCase()}.pdf`, '_blank');
}

// Add event listener to resume download button
document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('download-cv');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', downloadResume);
  }
});

function getCurrentLanguage() {
  return localStorage.getItem('language') || 'en';
}

function updateResumeLink() {
  const lang = getCurrentLanguage();
  const resumeLink = document.querySelector('[data-resume-link]');
  if (resumeLink) {
    resumeLink.href = `/Homepage/assets/resumes/Michael_Dambock_Resume_${lang.toUpperCase()}.pdf`;
    console.log('Updated resume link for language:', lang);
  }
}

// Initialize resume link on page load
document.addEventListener('DOMContentLoaded', () => {
  updateResumeLink();
});

// Dashboard modal functionality
function initDashboardModal() {
  const modal = document.getElementById('dashboardModal');
  const btns = document.querySelectorAll('.view-dashboard-btn');
  const closeBtn = document.querySelector('.close-modal');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}

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
  initDashboardModal();

  // Listen for language changes
  window.addEventListener('languageChanged', () => {
    // Reinitialize components that depend on translations
    initTypedJs();
    updateResumeLink();
  });
});
