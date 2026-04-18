import { header } from '../components/header.js';
import { footer } from '../components/footer.js';
import { heroSlider } from '../components/heroSlider.js';
import { weatherWidget } from '../components/weatherWidget.js';
import { placesWidget } from '../components/placesWidget.js';
import { getWeather } from '../services/weatherServices.js';
import { exploreWidget } from '../components/exploreWidget.js';



export function loadHome() {
  const app = document.querySelector('#app');

  app.innerHTML = `
    ${header()}

    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-slider">
        ${heroSlider([
          '/images/Bangalos-Zongo.jpeg',
          '/images/mutli-color-bird.jpg',
          '/images/mode-et-beaute.jpg',
        ])}
      </div>

      <div class="hero-overlay"> 
        <h1>Congo Empire</h1>
        <p>Let's explore the Heart of Africa</p>
      </div>

      <a href="#donate">Donate</a>          
    </section>

    <!-- WEATHER WIDGET -->
    ${weatherWidget()}

     <!-- EXPLORE WIDGET -->
    ${exploreWidget()}

    <!-- PAGE DIVIDER -->
    <div class="divider"></div>

    <!-- PLACES WIDGET -->
    ${placesWidget()}

    ${footer()}
  `;

  // =========================
  // MENU ELEMENTS
  // =========================
  const menuToggle = document.querySelector('#menu-toggle');
  const navMenu = document.querySelector('#nav-menu');
  const overlay = document.querySelector('#overlay');
  const menuIcon = document.querySelector('#menu-icon');

  if (!menuToggle || !navMenu || !overlay || !menuIcon) return;

  function resetMenu() {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    menuIcon.textContent = '☰';
  }

  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    overlay.classList.toggle('active', isOpen);
    menuIcon.textContent = isOpen ? '✖' : '☰';
  });

  overlay.addEventListener('click', resetMenu);

  navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') resetMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      resetMenu();
    }
  });

  // =========================
  // HERO SLIDER
  // =========================
  const slides = document.querySelectorAll('.hero-slider .slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((s) => s.classList.remove('active'));
    if (slides[index]) {
      slides[index].classList.add('active');
    }
  }

  if (slides.length > 0) {
    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 4000);
  }

  // =========================
  // WEATHER LOADER
  // =========================
  loadWeatherData();
}

// =========================
// WEATHER FUNCTION
// =========================
async function loadWeatherData() {
  try {
    const lat = -4.322447;
    const lon = 15.307045;
    const units = 'metric';
    const apiKey = 'd100c53e022ac740b8e46f1ae5caf79f';

    const data = await getWeather(lat, lon, apiKey, units);

    const city = document.querySelector('#city');
    const currentTemp = document.querySelector('#current-temp');
    const tempImperial = document.querySelector('#temp-imperial');

    if (!city || !currentTemp || !tempImperial) return;

    const celsius = Math.round(data.main.temp);
    const fahrenheit = Math.round((celsius * 9) / 5 + 32);

    city.textContent = data.name;
    currentTemp.textContent = `${celsius}°C`;
    tempImperial.textContent = `${fahrenheit}°F`;
  } catch (error) {
    console.error('Weather loading error:', error);
  }
}
