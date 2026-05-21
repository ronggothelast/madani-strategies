<script lang="ts">
  import { home, navigation, finalCTA } from '$lib/content';
</script>

<!-- Hero Section -->
<section class="hero-section">
  <div class="hero-content">
    <h1 class="hero-headline">{home.hero.headline.en}</h1>
    <p class="hero-subheadline">{home.hero.subheadline.en}</p>
    
    <div class="hero-stats">
      {#each home.stats as stat}
        <div class="stat-item">
          <span class="stat-number">{stat.number}</span>
          <span class="stat-label">{stat.label.en}</span>
        </div>
      {/each}
    </div>
    
    <div class="hero-cta-group">
      <a href="/contact" class="cta-primary">
        {home.hero.ctaPrimary.en} →
      </a>
      <a href="/approach" class="cta-secondary">
        {home.hero.ctaSecondary.en} →
      </a>
    </div>
  </div>
</section>

<!-- Why MaGies Section -->
<section class="why-magies-section">
  <div class="section-content">
    <h2 class="section-headline">{home.valueProp.headline.en}</h2>
    <p class="section-body">{home.valueProp.body.en}</p>
    
    <div class="value-cards">
      {#each home.valueProp.cards as card}
        <div class="value-card">
          <h3 class="card-title">{card.title.en}</h3>
          <p class="card-body">{card.body.en}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- What We Do Section -->
<section class="what-we-do-section">
  <div class="section-content">
    <h2 class="section-headline">{services.pageIntro.headline.en}</h2>
    <p class="section-body">{services.pageIntro.body.en}</p>
    
    <div class="services-grid">
      {#each services.list as service}
        <div class="service-card">
          <span class="service-number">{service.number}</span>
          <h3 class="service-title">{service.name.en}</h3>
          <p class="service-tagline">{service.tagline.en}</p>
          <p class="service-body">{service.body.en}</p>
          <div class="service-tags">
            {#each service.tags.en as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
          <a href="/services" class="service-link">
            Learn more →
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Our Approach Section -->
<section class="our-approach-section">
  <div class="section-content">
    <h2 class="section-headline">{approach.pageIntro.headline.en}</h2>
    <p class="section-body">{approach.pageIntro.body.en}</p>
    
    <div class="approach-stages">
      {#each approach.stages as stage}
        <div class="approach-stage">
          <span class="stage-number">{stage.number}</span>
          <h3 class="stage-title">{stage.title.en}</h3>
          <p class="stage-body">{stage.body.en}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Proof of Impact Section -->
<section class="proof-impact-section">
  <div class="section-content">
    <h2 class="section-headline">{impact.pageIntro.headline.en}</h2>
    <p class="section-body">{impact.pageIntro.body.en}</p>
    
    <div class="impact-cards">
      {#each impact.cards as card}
        <div class="impact-card">
          <span class="impact-category">{card.category.en}</span>
          <h3 class="impact-title">{card.title.en}</h3>
          <p class="impact-body">{card.body.en}</p>
          <a href="/impact" class="impact-link">
            Read case study →
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- The Team Section -->
<section class="the-team-section">
  <div class="section-content">
    <h2 class="section-headline">{team.pageIntro.headline.en}</h2>
    <p class="section-body">Specialists, not generalists.</p>
    
    <div class="team-grid">
      {#each team.core as member}
        <div class="team-member">
          <div class="member-avatar">
            <span class="member-initials">{member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}</span>
          </div>
          <h3 class="member-name">{member.name}</h3>
          <p class="member-role">{member.role.en}</p>
        </div>
      {/each}
    </div>
    
    <a href="/team" class="view-all-team">
      Meet the full team →
    </a>
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

<style>
  :global(:root) {
    --ink: #1A2D4A;
    --paper: #F0EDE6;
    --teal: #5B8B8A;
    --ocean: #2A5D7A;
    --sage: #8A9A8A;
    --earth: #6B5B4A;
  }

  .hero-section {
    background: var(--ink);
    color: var(--paper);
    padding: 140px 20px;
    position: relative;
    overflow: hidden;
  }

  .hero-content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  .hero-headline {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 24px;
    letter-spacing: -0.02em;
  }

  .hero-subheadline {
    font-size: 1.25rem;
    line-height: 1.6;
    color: rgba(240, 237, 230, 0.8);
    max-width: 700px;
    margin: 0 auto 48px;
  }

  .hero-stats {
    display: flex;
    justify-content: center;
    gap: 60px;
    margin-bottom: 48px;
    flex-wrap: wrap;
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--teal);
  }

  .stat-label {
    display: block;
    font-size: 0.95rem;
    color: rgba(240, 237, 230, 0.7);
    margin-top: 4px;
  }

  .hero-cta-group {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-primary, .cta-secondary {
    padding: 14px 32px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .cta-primary {
    background: var(--paper);
    color: var(--ink);
  }

  .cta-primary:hover {
    background: rgba(240, 237, 230, 0.9);
    transform: translateY(-2px);
  }

  .cta-secondary {
    background: transparent;
    color: var(--paper);
    border: 2px solid rgba(240, 237, 230, 0.3);
  }

  .cta-secondary:hover {
    border-color: var(--paper);
    background: rgba(255, 255, 255, 0.05);
  }

  .section-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 100px 20px;
  }

  .section-headline {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 20px;
    letter-spacing: -0.02em;
  }

  .section-body {
    font-size: 1.1rem;
    line-height: 1.65;
    color: rgba(26, 45, 74, 0.8);
    max-width: 800px;
    margin-bottom: 60px;
  }

  .value-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .value-card {
    background: var(--paper);
    padding: 32px;
    border-radius: 8px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .value-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(26, 45, 74, 0.08);
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 16px;
    color: var(--ink);
  }

  .card-body {
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(26, 45, 74, 0.75);
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .service-card {
    background: var(--paper);
    padding: 32px;
    border-radius: 8px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(26, 45, 74, 0.08);
  }

  .service-number {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--teal);
    margin-bottom: 12px;
  }

  .service-title {
    font-size: 1.35rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--ink);
  }

  .service-tagline {
    font-size: 1.05rem;
    font-weight: 500;
    color: var(--ocean);
    margin-bottom: 16px;
  }

  .service-body {
    font-size: 0.95rem;
    line-height: 1.6;
    color: rgba(26, 45, 74, 0.75);
    margin-bottom: 20px;
  }

  .service-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
  }

  .tag {
    padding: 4px 12px;
    background: rgba(91, 139, 138, 0.1);
    color: var(--teal);
    font-size: 0.8rem;
    font-weight: 500;
    border-radius: 20px;
  }

  .service-link {
    color: var(--teal);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .approach-stages {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .approach-stage {
    background: var(--paper);
    padding: 32px;
    border-radius: 8px;
    border-left: 4px solid var(--teal);
  }

  .stage-number {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--teal);
    margin-bottom: 16px;
  }

  .stage-title {
    font-size: 1.35rem;
    font-weight: 700;
    margin-bottom: 16px;
    color: var(--ink);
  }

  .stage-body {
    font-size: 0.95rem;
    line-height: 1.6;
    color: rgba(26, 45, 74, 0.75);
  }

  .impact-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .impact-card {
    background: var(--paper);
    padding: 32px;
    border-radius: 8px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .impact-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(26, 45, 74, 0.08);
  }

  .impact-category {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--teal);
    margin-bottom: 12px;
  }

  .impact-title {
    font-size: 1.35rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--ink);
  }

  .impact-body {
    font-size: 0.95rem;
    line-height: 1.6;
    color: rgba(26, 45, 74, 0.75);
    margin-bottom: 20px;
  }

  .impact-link {
    color: var(--teal);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;
    margin-bottom: 40px;
  }

  .team-member {
    text-align: center;
  }

  .member-avatar {
    width: 100px;
    height: 120px;
    background: var(--ocean);
    border-radius: 4px;
    margin: 0 auto 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .member-initials {
    color: var(--paper);
    font-size: 1.5rem;
    font-weight: 700;
  }

  .member-name {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 4px;
    color: var(--ink);
  }

  .member-role {
    font-size: 0.9rem;
    color: rgba(26, 45, 74, 0.6);
  }

  .view-all-team {
    display: block;
    text-align: center;
    color: var(--teal);
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    margin-top: 20px;
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

  @media (max-width: 768px) {
    .hero-headline {
      font-size: 2.25rem;
    }

    .hero-stats {
      gap: 30px;
    }

    .value-cards, .services-grid, .approach-stages {
      grid-template-columns: 1fr;
    }

    .impact-cards {
      grid-template-columns: 1fr;
    }

    .team-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
