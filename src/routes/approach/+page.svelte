<script lang="ts">
  import { approach, finalCTA } from '$lib/content';
</script>

<!-- Approach Page Content -->
<div class="approach-page">
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-headline">{approach.pageIntro.headline.en}</h1>
      <p class="hero-subheadline">{approach.pageIntro.body.en}</p>
    </div>
  </section>

  <!-- Approach Stages -->
  <section class="approach-stages-section">
    <div class="section-content">
      <div class="stages-container">
        {#each approach.stages as stage}
          <div class="approach-stage">
            <span class="stage-number">{stage.number}</span>
            <h2 class="stage-title">{stage.title.en}</h2>
            <p class="stage-body">{stage.body.en}</p>
          </div>
        {/each}
      </div>
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

  .approach-page {
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
    margin-bottom: 24px;
    letter-spacing: -0.02em;
  }

  .hero-subheadline {
    font-size: 1.15rem;
    line-height: 1.7;
    color: rgba(240, 237, 230, 0.85);
  }

  .section-content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 100px 20px;
  }

  .stages-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  .approach-stage {
    background: var(--paper);
    padding: 48px 32px;
    border-radius: 12px;
    border-left: 4px solid var(--teal);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .approach-stage:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(26, 45, 74, 0.1);
  }

  .stage-number {
    display: block;
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--teal);
    margin-bottom: 20px;
  }

  .stage-title {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: var(--ink);
  }

  .stage-body {
    font-size: 1.05rem;
    line-height: 1.7;
    color: rgba(26, 45, 74, 0.8);
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

    .stages-container {
      grid-template-columns: 1fr;
    }

    .stage-title {
      font-size: 1.5rem;
    }
  }
</style>
