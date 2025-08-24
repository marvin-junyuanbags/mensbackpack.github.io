// Navigation and Mobile Menu
class Navigation {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }
    
    init() {
        this.setupScrollEffect();
        this.setupMobileMenu();
        this.setupActiveLinks();
    }
    
    setupScrollEffect() {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                this.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                this.navbar.style.backdropFilter = 'blur(10px)';
            } else {
                this.navbar.style.background = '#ffffff';
                this.navbar.style.backdropFilter = 'none';
            }
            
            lastScrollY = currentScrollY;
        });
    }
    
    setupMobileMenu() {
        if (this.hamburger && this.navMenu) {
            this.hamburger.addEventListener('click', () => {
                this.navMenu.classList.toggle('active');
                this.hamburger.classList.toggle('active');
            });
        }
    }
    
    setupActiveLinks() {
        this.navLinks.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add('active');
            }
        });
    }
}

// Animation Observer
class AnimationObserver {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }
    
    init() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(
                this.handleIntersection.bind(this),
                this.observerOptions
            );
            
            this.observeElements();
        }
    }
    
    observeElements() {
        const elements = document.querySelectorAll(
            '.feature-card, .category-card, .testimonial-card, .timeline-item, .section-header'
        );
        
        elements.forEach(el => {
            el.classList.add('fade-in');
            this.observer.observe(el);
        });
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0.1s';
                entry.target.classList.add('animate');
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// Language Selector (Enhanced with translations)
class LanguageSelector {
    constructor() {
        this.selector = document.querySelector('.language-selector');
        this.currentLang = localStorage.getItem('selectedLanguage') || 'en';
        this.languageManager = null;
        
        this.init();
    }
    
    init() {
        // Initialize language manager when translations are available
        if (typeof LanguageManager !== 'undefined') {
            this.languageManager = new LanguageManager();
            this.languageManager.init();
        }
        
        if (this.selector) {
            this.selector.value = this.currentLang;
            this.selector.addEventListener('change', this.handleLanguageChange.bind(this));
            this.applyLanguage(this.currentLang);
        }
    }
    
    handleLanguageChange(event) {
        const selectedLang = event.target.value;
        this.currentLang = selectedLang;
        localStorage.setItem('selectedLanguage', selectedLang);
        
        if (this.languageManager) {
            this.languageManager.setLanguage(selectedLang);
        } else {
            this.applyLanguage(selectedLang);
        }
    }
    
    applyLanguage(lang) {
        document.documentElement.lang = lang;
        
        // Show notification about language change
        if (typeof NotificationManager !== 'undefined') {
            const messages = {
                'en': 'Language changed to English',
                'es': 'Idioma cambiado a Español',
                'fr': 'Langue changée en Français',
                'de': 'Sprache geändert zu Deutsch',
                'zh': '语言已更改为中文'
            };
            
            const notification = new NotificationManager();
            notification.show(messages[lang] || messages['en'], 'success', 3000);
        }
    }
}

// Contact Form Handler
class ContactForm {
    constructor() {
        this.form = document.querySelector('#contact-form');
        this.quoteForm = document.querySelector('#quote-form');
        
        this.init();
    }
    
    init() {
        if (this.form) {
            this.form.addEventListener('submit', this.handleContactSubmit.bind(this));
        }
        
        if (this.quoteForm) {
            this.quoteForm.addEventListener('submit', this.handleQuoteSubmit.bind(this));
            this.setupQuoteFormLogic();
        }
    }
    
    setupQuoteFormLogic() {
        const productTypeSelect = this.quoteForm.querySelector('#product-type');
        const customizationOptions = this.quoteForm.querySelector('#customization-options');
        
        if (productTypeSelect && customizationOptions) {
            productTypeSelect.addEventListener('change', (e) => {
                if (e.target.value) {
                    customizationOptions.style.display = 'block';
                } else {
                    customizationOptions.style.display = 'none';
                }
            });
        }
    }
    
    async handleContactSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        // Validate form
        if (!this.validateContactForm(data)) {
            return;
        }
        
        // Show loading state
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            // Simulate API call
            await this.simulateFormSubmission(data);
            
            this.showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            this.form.reset();
        } catch (error) {
            this.showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }
    
    async handleQuoteSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(this.quoteForm);
        const data = Object.fromEntries(formData.entries());
        
        // Validate form
        if (!this.validateQuoteForm(data)) {
            return;
        }
        
        // Show loading state
        const submitBtn = this.quoteForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;
        
        try {
            // Simulate API call
            await this.simulateFormSubmission(data);
            
            this.showNotification('Quote request submitted successfully! We\'ll send you a detailed quote within 24 hours.', 'success');
            this.quoteForm.reset();
        } catch (error) {
            this.showNotification('Failed to submit quote request. Please try again.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }
    
    validateContactForm(data) {
        const required = ['name', 'email', 'message'];
        
        for (let field of required) {
            if (!data[field] || data[field].trim() === '') {
                this.showNotification(`Please fill in the ${field} field.`, 'error');
                return false;
            }
        }
        
        if (!this.isValidEmail(data.email)) {
            this.showNotification('Please enter a valid email address.', 'error');
            return false;
        }
        
        return true;
    }
    
    validateQuoteForm(data) {
        const required = ['company-name', 'contact-name', 'email', 'product-type', 'quantity'];
        
        for (let field of required) {
            if (!data[field] || data[field].trim() === '') {
                this.showNotification(`Please fill in the ${field.replace('-', ' ')} field.`, 'error');
                return false;
            }
        }
        
        if (!this.isValidEmail(data.email)) {
            this.showNotification('Please enter a valid email address.', 'error');
            return false;
        }
        
        return true;
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    async simulateFormSubmission(data) {
        // Simulate API delay
        return new Promise((resolve) => {
            setTimeout(() => {
                // Form data prepared for submission
                resolve();
            }, 1500);
        });
    }
    
    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            max-width: 400px;
            animation: slideInRight 0.3s ease;
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Setup close button
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
}

// Smooth Scrolling
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        // Handle anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed header
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Lazy Loading for Images
class LazyLoader {
    constructor() {
        this.imageObserver = null;
        this.init();
    }
    
    init() {
        if ('IntersectionObserver' in window) {
            this.imageObserver = new IntersectionObserver(
                this.handleImageIntersection.bind(this),
                {
                    rootMargin: '50px 0px',
                    threshold: 0.01
                }
            );
            
            this.observeImages();
        }
    }
    
    observeImages() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => this.imageObserver.observe(img));
    }
    
    handleImageIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                this.imageObserver.unobserve(img);
            }
        });
    }
}

// Product Gallery (for product pages)
class ProductGallery {
    constructor() {
        this.galleries = document.querySelectorAll('.product-gallery');
        this.init();
    }
    
    init() {
        this.galleries.forEach(gallery => {
            this.setupGallery(gallery);
        });
    }
    
    setupGallery(gallery) {
        const thumbnails = gallery.querySelectorAll('.thumbnail');
        const mainImage = gallery.querySelector('.main-image');
        
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const newSrc = thumbnail.dataset.fullsize;
                if (newSrc && mainImage) {
                    mainImage.src = newSrc;
                    
                    // Update active thumbnail
                    thumbnails.forEach(t => t.classList.remove('active'));
                    thumbnail.classList.add('active');
                }
            });
        });
    }
}

// Search Functionality
class SearchHandler {
    constructor() {
        this.searchInput = document.querySelector('#search-input');
        this.searchResults = document.querySelector('#search-results');
        this.searchableItems = document.querySelectorAll('.searchable');
        
        this.init();
    }
    
    init() {
        if (this.searchInput) {
            this.searchInput.addEventListener('input', this.handleSearch.bind(this));
        }
    }
    
    handleSearch(event) {
        const query = event.target.value.toLowerCase().trim();
        
        if (query.length === 0) {
            this.clearSearch();
            return;
        }
        
        const results = [];
        
        this.searchableItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                results.push(item);
            }
        });
        
        this.displayResults(results, query);
    }
    
    displayResults(results, query) {
        if (!this.searchResults) return;
        
        if (results.length === 0) {
            this.searchResults.innerHTML = `<p>No results found for "${query}"</p>`;
        } else {
            this.searchResults.innerHTML = results.map(item => {
                const title = item.querySelector('h3, h2, h1')?.textContent || 'Result';
                const excerpt = item.textContent.substring(0, 150) + '...';
                
                return `
                    <div class="search-result">
                        <h4>${title}</h4>
                        <p>${excerpt}</p>
                    </div>
                `;
            }).join('');
        }
        
        this.searchResults.style.display = 'block';
    }
    
    clearSearch() {
        if (this.searchResults) {
            this.searchResults.style.display = 'none';
        }
    }
}

// Cookie Consent
class CookieConsent {
    constructor() {
        this.consentKey = 'cookie-consent';
        this.init();
    }
    
    init() {
        if (!localStorage.getItem(this.consentKey)) {
            this.showConsentBanner();
        }
    }
    
    showConsentBanner() {
        const banner = document.createElement('div');
        banner.className = 'cookie-consent';
        banner.innerHTML = `
            <div class="cookie-content">
                <p>We use cookies to enhance your browsing experience and provide personalized content. By continuing to use our site, you consent to our use of cookies.</p>
                <div class="cookie-actions">
                    <button class="btn btn-primary" id="accept-cookies">Accept</button>
                    <button class="btn btn-outline" id="decline-cookies">Decline</button>
                </div>
            </div>
        `;
        
        banner.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(30, 41, 59, 0.95);
            color: white;
            padding: 1rem;
            z-index: 10000;
            backdrop-filter: blur(10px);
        `;
        
        document.body.appendChild(banner);
        
        // Handle consent
        banner.querySelector('#accept-cookies').addEventListener('click', () => {
            localStorage.setItem(this.consentKey, 'accepted');
            banner.remove();
        });
        
        banner.querySelector('#decline-cookies').addEventListener('click', () => {
            localStorage.setItem(this.consentKey, 'declined');
            banner.remove();
        });
    }
}

// Performance Monitor
class PerformanceMonitor {
    constructor() {
        this.init();
    }
    
    init() {
        // Monitor page load performance
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                
                // Page load time tracked: ${loadTime}ms
                
                // You can send this data to analytics
                this.trackPerformance({
                    loadTime,
                    domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                    firstPaint: performance.getEntriesByType('paint')[0]?.startTime || 0
                });
            }, 0);
        });
    }
    
    trackPerformance(data) {
        // This would typically send data to your analytics service
        // Performance data collected for analytics
    }
}

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
    new AnimationObserver();
    new LanguageSelector();
    new ContactForm();
    new SmoothScroll();
    new LazyLoader();
    new ProductGallery();
    new SearchHandler();
    new CookieConsent();
    new PerformanceMonitor();
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .fade-in.animate {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .cookie-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
    }
    
    .cookie-actions {
        display: flex;
        gap: 1rem;
        flex-shrink: 0;
    }
    
    @media (max-width: 768px) {
        .cookie-content {
            flex-direction: column;
            text-align: center;
        }
        
        .cookie-actions {
            width: 100%;
            justify-content: center;
        }
    }
`;
document.head.appendChild(style);