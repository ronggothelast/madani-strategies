<script lang="ts">
  import { navigation } from '$lib/content';
  import { browser } from '$app/environment';
  
  // Track active page for highlighting
  let activePage = '';
  
  if (browser) {
    activePage = window.location.pathname;
  }
</script>

<!-- Layout wrapper -->
<div class="page-root">
  <!-- Header -->
  <header class="site-header">
    <div class="header-content">
      <a href="/" class="brand-link">
        <span class="brand-name">Madani Strategies</span>
      </a>
      
      <nav class="main-nav">
        {#each navigation as item}
          <a 
            href={item.href} 
            class:active={activePage === item.href}
            aria-label={item.label.en}
          >
            {item.label.en}
          </a>
        {/each}
      </nav>
      
      <a href="/contact" class="cta-button">
        ENGAGE →
      </a>
    </div>
  </header>

  <!-- Main content area -->
  <main class="site-main">
    <slot />
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <span class="footer-brand-name">Madani Strategies</span>
        <p class="footer-tagline">Connecting Growth to Community Impact</p>
      </div>
      
      <div class="footer-contact">
        <p>hello@madanistrategies.com</p>
        <p>+62 813-1434-4485</p>
        <p>Jl. Mesjid Al Hidayah No.14A<br>Pasar Minggu, Jakarta Selatan 12520</p>
      </div>
      
      <div class="footer-links">
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/approach">Approach</a>
        <a href="/impact">Impact</a>
        <a href="/team">Team</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>© 2026 Madani Strategies. Affiliated with Yayasan Madani Berkelanjutan. All rights reserved.</p>
    </div>
  </footer>
</div>

<style>
  :global(:root) {
    --ink: #1A2D4A;
    --paper: #F0EDE6;
    --teal: #5B8B8A;
    --ocean: #2A5D7A;
    --sage: #8A9A8A;
    --earth: #6B5B4A;
  }

  .page-root {
    min-height: 100vh;
    background: var(--paper);
    color: var(--ink);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    overflow-x: clip;
  }

  .site-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--paper);
    border-bottom: 1px solid rgba(26, 45, 74, 0.1);
  }

  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }

  .brand-link {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--ink);
    text-decoration: none;
    letter-spacing: -0.02em;
  }

  .brand-name {
    font-weight: 700;
  }

  .main-nav {
    display: flex;
    gap: 32px;
    align-items: center;
  }

  .main-nav a {
    color: var(--ink);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  .main-nav a:hover {
    color: var(--teal);
  }

  .main-nav a.active {
    color: var(--teal);
    font-weight: 600;
  }

  .cta-button {
    padding: 12px 24px;
    background: var(--ink);
    color: var(--paper);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .cta-button:hover {
    background: var(--teal);
    transform: translateY(-1px);
  }

  .site-main {
    min-height: calc(100vh - 300px);
  }

  .site-footer {
    background: var(--ink);
    color: var(--paper);
    padding: 60px 20px 30px;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 40px;
  }

  .footer-brand .footer-brand-name {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .footer-tagline {
    color: rgba(240, 237, 230, 0.7);
    font-size: 0.95rem;
    margin: 0;
  }

  .footer-contact p {
    margin: 8px 0;
    color: rgba(240, 237, 230, 0.8);
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .footer-links a {
    display: block;
    color: rgba(240, 237, 230, 0.8);
    text-decoration: none;
    margin: 8px 0;
    transition: color 0.2s ease;
  }

  .footer-links a:hover {
    color: var(--teal);
  }

  .footer-bottom {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .footer-bottom p {
    color: rgba(240, 237, 230, 0.6);
    font-size: 0.85rem;
    margin: 0;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    .header-content {
      flex-direction: column;
      gap: 16px;
    }

    .main-nav {
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }

    .footer-content {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
</style>
