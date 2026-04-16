import { navbar } from '../components/navbar.js';
import { footer } from '../components/footer.js';

export function loadHome() {
  const app = document.querySelector('#app');

  app.innerHTML = `
    ${navbar()}

    <!-- HERO -->
    <section class="hero">
      <div class="hero-overlay">
        <h1>Welcome to the Democratic Republic of the Congo</h1>
        <p>Let's explore the Heart of Africa</p>
      </div>
    </section>

    <!-- WEATHER -->
    <section class="weather-section">
      <div class="card weather-card">
        <div>
          <h3>Kinshasa Weather</h3>
          <p>28°C Sunny</p>
        </div>
        <div>☀️</div>
      </div>

      <div class="card weather-card">
        <div>
          <h3>Current City</h3>
          <p>22°C Cloudy</p>
        </div>
        <div>☁️</div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- PLACES -->
    <section>
      <h2 class="section-title">Featured Places</h2>

      <div class="places-container">
        <div class="card place-item">
          <img src="/images/kinshasa.jpg" alt="Kinshasa">
          <h3>Kinshasa</h3>
        </div>

        <div class="card place-item">
          <img src="/images/goma.jpg" alt="Goma">
          <h3>Goma</h3>
        </div>

        <div class="card place-item">
          <img src="/images/lubumbashi.jpg" alt="Lubumbashi">
          <h3>Lubumbashi</h3>
        </div>
      </div>
    </section>

    ${footer()}
  `;

  const menuToggle = document.querySelector('#menu-toggle');
  const navMenu = document.querySelector('#nav-menu');
  const overlay = document.querySelector('#overlay');
  const menuIcon = document.querySelector('#menu-icon');

  if (menuToggle && navMenu && overlay) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      overlay.classList.toggle('active');

      // Toggle icon
      if (navMenu.classList.contains('active')) {
        menuIcon.textContent = '✖';
      } else {
        menuIcon.textContent = '☰';
      }
    });

    // Close when clicking overlay
    overlay.addEventListener('click', () => {
      navMenu.classList.remove('active');
      overlay.classList.remove('active');
      menuIcon.textContent = '☰';
    });

    // Close when clicking a link
    navMenu.addEventListener('click', () => {
      navMenu.classList.remove('active');
      overlay.classList.remove('active');
      menuIcon.textContent = '☰';
    });
  }
}