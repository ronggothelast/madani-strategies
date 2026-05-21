<script lang="ts">
  import { team, finalCTA } from '$lib/content';
</script>

<!-- Team Page Content -->
<div class="team-page">
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-headline">{team.pageIntro.headline.en}</h1>
      <p class="hero-subheadline">Specialists, not generalists.</p>
    </div>
  </section>

  <!-- Core Team -->
  <section class="core-team-section">
    <div class="section-content">
      <h2 class="section-headline">Core Team</h2>
      <div class="team-grid">
        {#each team.core as member}
          <div class="team-member">
            <div class="member-avatar">
              <span class="member-initials">{member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}</span>
            </div>
            <h3 class="member-name">{member.name}</h3>
            <p class="member-role">{member.role.en}</p>
            <p class="member-bio">{member.bio.en}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Affiliated Experts -->
  <section class="affiliated-section">
    <div class="section-content">
      <h2 class="section-headline">Affiliated Experts</h2>
      <p class="section-body">{team.affiliated.intro.en}</p>
      <div class="affiliated-grid">
        {#each team.affiliated.list as member}
          <div class="affiliated-member">
            <h3 class="member-name">{member.name}</h3>
            <p class="member-role">{member.role.en}</p>
            <p class="member-bio">{member.bio.en}</p>
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

  .team-page {
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

  .section-headline {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 40px;
    color: var(--ink);
  }

  .section-body {
    font-size: 1.1rem;
    line-height: 1.65;
    color: rgba(26, 45, 74, 0.8);
    margin-bottom: 40px;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
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
    color: var(--teal);
    margin-bottom: 12px;
  }

  .member-bio {
    font-size: 0.9rem;
    line-height: 1.6;
    color: rgba(26, 45, 74, 0.75);
  }

  .affiliated-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .affiliated-member {
    background: var(--paper);
    padding: 24px;
    border-radius: 8px;
    border: 1px solid rgba(26, 45, 74, 0.08);
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

    .team-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .affiliated-grid {
      grid-template-columns: 1fr;
    }

    .section-headline {
      font-size: 1.75rem;
    }
  }
</style>
