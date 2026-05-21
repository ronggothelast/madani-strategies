<script lang="ts">
  import { about, finalCTA } from '$lib/content';
</script>

<!-- About Page Content -->
<div class="about-page">
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-headline">{about.pageIntro.headline.en}</h1>
      <p class="hero-subheadline">{about.pageIntro.body1.en}</p>
      <p class="hero-subheadline">{about.pageIntro.body2.en}</p>
    </div>
  </section>

  <!-- What We Do Section -->
  <section class="what-we-do-section">
    <div class="section-content">
      <h2 class="section-headline">{about.whatWeDo.en}</h2>
    </div>
  </section>

  <!-- Who We Serve Section -->
  <section class="who-we-serve-section">
    <div class="section-content">
      <h2 class="section-headline">{about.whoWeServe.en}</h2>
    </div>
  </section>

  <!-- The Gap Section -->
  <section class="the-gap-section">
    <div class="section-content">
      <h2 class="section-headline">{about.theGap.en}</h2>
    </div>
  </section>

  <!-- Final CTA Section -->
  <section class="final-cta-section">
    <div class="cta-content">
      <h2 class="cta-headline">{finalCTA.headline.en}</h2>
      <p class="cta-body">{finalCTA.body.en}</p>
      <a href="/contact" class="cta-primary">
        {finalCTA.ctaPrimary.en} →
      </a>
    </div>
  </section>
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

  .about-page {
    min-height: 100vh;
    background: var(--paper);
    color: var(--ink);
  }

  .hero-section {
    background: var(--ink);
    color: var(--paper);
    padding: 140px 20px;
    text-align: center;
  }

  .hero-content {
    max-width: 900px;
    margin: 0 auto;
  }

  .hero-headline {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 32px;
    letter-spacing: -0.02em;
  }

  .hero-subheadline {
    font-size: 1.15rem;
    line-height: 1.7;
    color: rgba(240, 237, 230, 0.85);
    margin-bottom: 20px;
  }

  .section-content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 100px 20px;
  }

  .section-headline {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 30px;
    letter-spacing: -0.02em;
  }

  .final-cta-section {
    background: var(--ink);
    color: var(--paper);
    padding: 100px 20px;
    text-align: center;
  }

  .cta-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .cta-headline {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 24px;
  }

  .cta-body {
    font-size: 1.15rem;
    line-height: 1.65;
    margin-bottom: 40px;
    color: rgba(240, 237, 230, 0.85);
  }

  .cta-primary {
    display: inline-block;
    padding: 14px 32px;
    background: var(--paper);
    color: var(--ink);
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .cta-primary:hover {
    background: rgba(240, 237, 230, 0.9);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .hero-headline {
      font-size: 2rem;
    }

    .section-headline {
      font-size: 1.75rem;
    }
  }
</style>
