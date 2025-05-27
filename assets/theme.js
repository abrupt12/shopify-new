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

  // Cart Drawer
  function toggleCartDrawer() {
    const cartDrawer = document.getElementById('CartDrawer');
    if (cartDrawer) {
      cartDrawer.classList.toggle('hidden');
    }
  }

  // Product Form
  document.addEventListener('DOMContentLoaded', function() {
    const productForms = document.querySelectorAll('form[action="/cart/add"]');
    
    productForms.forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        
        fetch('/cart/add.js', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(item => {
          toggleCartDrawer();
        })
        .catch(error => {
          console.error('Error:', error);
        });
      });
    });
  });

  // Product Variant Selector
  document.addEventListener('DOMContentLoaded', function() {
    const variantSelects = document.querySelectorAll('select[data-option-index]');
    
    if (variantSelects.length > 0) {
      const productJson = document.getElementById('ProductJson-product-template');
      if (productJson) {
        const product = JSON.parse(productJson.innerHTML);
        
        function updateVariantId() {
          const selectedOptions = [];
          variantSelects.forEach(select => {
            selectedOptions.push(select.value);
          });
          
          const selectedVariant = product.variants.find(variant => {
            return variant.options.every((option, index) => option === selectedOptions[index]);
          });
          
          if (selectedVariant) {
            document.querySelector('input[name="id"]').value = selectedVariant.id;
            
            // Update price
            const priceElement = document.querySelector('.product-price');
            if (priceElement) {
              priceElement.innerHTML = formatMoney(selectedVariant.price);
            }
            
            // Update availability
            const addToCartButton = document.querySelector('button[name="add"]');
            if (addToCartButton) {
              if (selectedVariant.available) {
                addToCartButton.disabled = false;
                addToCartButton.textContent = theme.strings.addToCart;
              } else {
                addToCartButton.disabled = true;
                addToCartButton.textContent = theme.strings.soldOut;
              }
            }
          }
        }
        
        variantSelects.forEach(select => {
          select.addEventListener('change', updateVariantId);
        });
      }
    }
  });

  // Collection Sort
  document.addEventListener('DOMContentLoaded', function() {
    const sortSelect = document.querySelector('.collection-sort');
    if (sortSelect) {
      sortSelect.addEventListener('change', function(e) {
        const url = new URL(window.location.href);
        url.searchParams.set('sort_by', e.target.value);
        window.location.href = url.toString();
      });
    }
  });

  // Format money
  function formatMoney(cents) {
    const formatString = theme.moneyFormat || '${{amount}}';
    const value = (cents / 100).toFixed(2);
    return formatString.replace('{{amount}}', value);
  }
})(); 