// Theme JavaScript
(function() {
  'use strict';

  // Theme Constants
  const THEME = {
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1280
    },
    colors: {
      primary: '#003545',
      secondary: '#00796B',
      accent: '#00FFD5'
    }
  };

  // Utility Functions
  const utils = {
    // Debounce function for performance
    debounce: function(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    // Add class with animation frame for better performance
    addClass: function(element, className) {
      requestAnimationFrame(() => {
        element.classList.add(className);
      });
    },

    // Remove class with animation frame
    removeClass: function(element, className) {
      requestAnimationFrame(() => {
        element.classList.remove(className);
      });
    }
  };

  // Cart Functions
  const cart = {
    drawer: null,
    isOpen: false,

    init: function() {
      this.drawer = document.querySelector('.cart-drawer');
      this.bindEvents();
    },

    bindEvents: function() {
      // Toggle cart on cart icon click
      document.querySelectorAll('[data-cart-toggle]').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          this.toggleDrawer();
        });
      });

      // Close cart when clicking outside
      document.addEventListener('click', (e) => {
        if (this.isOpen && !e.target.closest('.cart-drawer') && !e.target.closest('[data-cart-toggle]')) {
          this.closeDrawer();
        }
      });
    },

    toggleDrawer: function() {
      this.isOpen ? this.closeDrawer() : this.openDrawer();
    },

    openDrawer: function() {
      utils.addClass(this.drawer, 'is-active');
      this.isOpen = true;
      document.body.style.overflow = 'hidden';
    },

    closeDrawer: function() {
      utils.removeClass(this.drawer, 'is-active');
      this.isOpen = false;
      document.body.style.overflow = '';
    },

    updateCount: function(count) {
      document.querySelectorAll('[data-cart-count]').forEach(element => {
        element.textContent = count;
        count > 0 ? element.removeAttribute('hidden') : element.setAttribute('hidden', '');
      });
    }
  };

  // Animation Functions
  const animations = {
    init: function() {
      this.initFloatAnimation();
      this.initScrollAnimations();
    },

    initFloatAnimation: function() {
      const floatingElements = document.querySelectorAll('.animate-float');
      floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
      });
    },

    initScrollAnimations: function() {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            utils.addClass(entry.target, 'is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('[data-animate-on-scroll]').forEach(element => {
        observer.observe(element);
      });
    }
  };

  // Product Functions
  const product = {
    init: function() {
      this.initQuantitySelectors();
      this.initVariantSelectors();
    },

    initQuantitySelectors: function() {
      document.querySelectorAll('[data-quantity-selector]').forEach(selector => {
        const input = selector.querySelector('input');
        const increment = selector.querySelector('[data-quantity-plus]');
        const decrement = selector.querySelector('[data-quantity-minus]');

        increment?.addEventListener('click', () => {
          input.value = parseInt(input.value) + 1;
          input.dispatchEvent(new Event('change'));
        });

        decrement?.addEventListener('click', () => {
          if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
            input.dispatchEvent(new Event('change'));
          }
        });
      });
    },

    initVariantSelectors: function() {
      document.querySelectorAll('[data-variant-selector]').forEach(select => {
        select.addEventListener('change', function() {
          const variant = this.value;
          const productForm = this.closest('form');
          if (productForm) {
            const variantInput = productForm.querySelector('input[name="id"]');
            if (variantInput) {
              variantInput.value = variant;
            }
          }
        });
      });
    }
  };

  // Initialize Theme
  document.addEventListener('DOMContentLoaded', function() {
    cart.init();
    animations.init();
    product.init();
  });

  // Make cart functions globally available for Shopify's Ajax API
  window.theme = window.theme || {};
  window.theme.cart = cart;
})(); 