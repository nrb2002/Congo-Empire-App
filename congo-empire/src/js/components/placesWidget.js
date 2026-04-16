export function placesWidget() {
  return `
    <section class="places-section">

      <h2 class="section-title">Featured Places</h2>

      <div class="places-container">

        <div class="place-card">
          <img src="/images/robot-roulage.jpg" alt="Kinshasa">
          <h3>Kinshasa</h3>
        </div>

        <div class="place-card">
          <img src="/images/camping-zongo.jpeg" alt="Goma">
          <h3>Goma</h3>
        </div>

        <div class="place-card">
          <img src="/images/mode-et-beaute.jpg" alt="Lubumbashi">
          <h3>Lubumbashi</h3>
        </div>
      </div>

      <!-- CTA -->
      <div class="places-cta">
        <span>Click to see more</span>
        <span class="arrow">→</span>
      </div>

    </section>
  `;
}