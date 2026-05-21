<script lang="ts">
  import { services, finalCTA } from '$lib/content';
</script>

<!-- Services Page Content -->
<div class="services-page">
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-headline">{services.pageIntro.headline.en}</h1>
      <p class="hero-subheadline">{services.pageIntro.body.en}</p>
    </div>
  </section>

  <!-- Services Grid -->
  <section class="services-grid-section">
    <div class="section-content">
      <div class="services-list">
        {#each services.list as service}
          <div class="service-item">
            <span class="service-number">{service.number}</span>
            <h2 class="service-name">{service.name.en}</h2>
            <p class="service-tagline">{service.tagline.en}</p>
            <p class="service-body">{service.body.en}</p>
            
            <div class="service-expertise">
              <h4 class="expertise-label">Our expertise includes:</h4>
              <ul class="expertise-list">
                {#each service.expertise.en as item}
                  <li>{item}</li>
                {/each}
              </ul>
            </div>
            
            <div class="service-tags">
              {#each service.tags.en as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
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

  .services-page {
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

  .services-list {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  .service-item {
    background: var(--paper);
    padding: 48px;
    border-radius: 12px;
    border: 1px solid rgba(26, 45, 74, 0.08);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .service-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(26, 45, 74, 0.1);
  }

  .service-number {
    display: block;
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--teal);
    margin-bottom: 16px;
  }

  .service-name {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 16px;
    color: var(--ink);
  }

  .service-tagline {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--ocean);
    margin-bottom: 20px;
  }

  .service-body {
    font-size: 1.05rem;
    line-height: 1.7;
    color: rgba(26, 45, 74, 0.8);
    margin-bottom: 32px;
  }

  .service-expertise {
    margin-bottom: 24px;
  }

  .expertise-label {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--ink);
    margin-bottom: 12px;
    display: block;
  }

  .expertise-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .expertise-list li {
    font-size: 0.95rem;
    color: rgba(26, 45, 74, 0.75);
    padding-left: 20px;
    position: relative;
  }

  .expertise-list li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--teal);
    font-weight: 700;
  }

  .service-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .tag {
    padding: 6px 16px;
    background: rgba(91, 139, 138, 0.1);
    color: var(--teal);
    font-size: 0.85rem;
    font-weight: 500;
    border-radius: 20px;
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

    .service-item {
      padding: 32px;
    }

    .service-name {
      font-size: 1.5rem;
    }

    .expertise-list {
      grid-template-columns: 1fr;
    }
  }
</style>
