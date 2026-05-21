<script lang="ts">
  import { contact, finalCTA, brand } from '$lib/content';
</script>

<!-- Contact Page Content -->
<div class="contact-page">
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-headline">{contact.pageIntro.headline.en}</h1>
      <p class="hero-subheadline">{contact.pageIntro.body.en}</p>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="contact-form-section">
    <div class="section-content">
      <div class="contact-container">
        <div class="contact-info">
          <h2 class="section-headline">Get in touch</h2>
          <p class="section-body">We don't start with a service package. We start with your situation. Tell us what you're facing and we'll tell you honestly whether we can help.</p>
          
          <div class="contact-details">
            <div class="contact-item">
              <span class="contact-label">Email</span>
              <a href="mailto:{brand.contact.email}" class="contact-value">{brand.contact.email}</a>
            </div>
            <div class="contact-item">
              <span class="contact-label">Phone</span>
              <a href="tel:{brand.contact.phone}" class="contact-value">{brand.contact.phone}</a>
            </div>
            <div class="contact-item">
              <span class="contact-label">Office</span>
              <span class="contact-value">{brand.contact.address.en}</span>
            </div>
          </div>
        </div>
        
        <div class="contact-form-wrapper">
          <form class="contact-form" onsubmit={(e) => e.preventDefault()}>
            <div class="form-group">
              <label for="name" class="form-label">Your Name</label>
              <input type="text" id="name" name="name" class="form-input" placeholder="John Doe" required />
            </div>
            
            <div class="form-group">
              <label for="email" class="form-label">Email Address</label>
              <input type="email" id="email" name="email" class="form-input" placeholder="john@company.com" required />
            </div>
            
            <div class="form-group">
              <label for="organization" class="form-label">Organization</label>
              <input type="text" id="organization" name="organization" class="form-input" placeholder="Company Name" />
            </div>
            
            <div class="form-group">
              <label for="message" class="form-label">Your Message</label>
              <textarea id="message" name="message" class="form-textarea" rows="5" placeholder="Tell us about your challenge..." required></textarea>
            </div>
            
            <button type="submit" class="submit-button">
              Send Message →
            </button>
          </form>
        </div>
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

  .contact-page {
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
    margin-bottom: 20px;
    color: var(--ink);
  }

  .section-body {
    font-size: 1.1rem;
    line-height: 1.65;
    color: rgba(26, 45, 74, 0.8);
    margin-bottom: 40px;
  }

  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .contact-item {
    display: flex;
    flex-direction: column;
  }

  .contact-label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--ink);
    margin-bottom: 6px;
  }

  .contact-value {
    font-size: 1.05rem;
    color: var(--ocean);
    text-decoration: none;
  }

  .contact-value:hover {
    text-decoration: underline;
  }

  .contact-form-wrapper {
    background: var(--paper);
    padding: 40px;
    border-radius: 12px;
    border: 1px solid rgba(26, 45, 74, 0.08);
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-label {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--ink);
    margin-bottom: 8px;
  }

  .form-input, .form-textarea {
    padding: 12px 16px;
    border: 1px solid rgba(26, 45, 74, 0.15);
    border-radius: 6px;
    font-size: 1rem;
    font-family: inherit;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .form-input:focus, .form-textarea:focus {
    outline: none;
    border-color: var(--teal);
    box-shadow: 0 0 0 3px rgba(91, 139, 138, 0.15);
  }

  .form-textarea {
    resize: vertical;
    min-height: 120px;
  }

  .submit-button {
    padding: 14px 28px;
    background: var(--ink);
    color: var(--paper);
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .submit-button:hover {
    background: var(--teal);
    transform: translateY(-2px);
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

    .contact-container {
      grid-template-columns: 1fr;
    }

    .contact-form-wrapper {
      padding: 30px;
    }

    .section-headline {
      font-size: 1.75rem;
    }
  }
</style>
