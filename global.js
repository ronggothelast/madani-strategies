/* ============================================
   MADANI STRATEGIES — GLOBAL JAVASCRIPT
   ============================================ */

(function() {
  'use strict';

  // DOM Ready
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initNav();
    initMobileNav();
    initScrollReveal();
    initSmoothScroll();
  }

  // ============================================
  // NAVIGATION
  // ============================================
  function initNav() {
    const nav = document.getElementById('nav');
    if (!nav) return;

    let lastScroll = 0;
    let ticking = false;

    function onScroll() {
      const currentScroll = window.scrollY;
      
      // Add scrolled class
      if (currentScroll > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });
  }

  // ============================================
  // MOBILE NAVIGATION
  // ============================================
  function initMobileNav() {
    const hamburger = document.getElementById('navHamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    // Close on link click
    navLinks.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      }
    });
  }

  // ============================================
  // SCROLL REVEAL
  // ============================================
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    // Fallback: reveal immediately if IntersectionObserver is not supported or we are in headless/slow environment after 1 second
    const fallbackTimeout = setTimeout(function() {
      reveals.forEach(function(el) {
        el.classList.add('visible');
      });
    }, 1200);

    const options = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    reveals.forEach(function(el) {
      observer.observe(el);
    });
  }

  // ============================================
  // SMOOTH SCROLL
  // ============================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href.length < 2) return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const navHeight = document.querySelector('.nav')?.offsetHeight || 80;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

})();
