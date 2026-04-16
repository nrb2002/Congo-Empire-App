import { navbar } from '../components/navbar.js';
import { footer } from '../components/footer.js';
import { heroSlider } from '../components/heroSlider.js';
import { weatherWidget } from '../components/weatherWidget.js';
import { placesWidget } from '../components/placesWidget.js';
import { getWeather } from '../services/weatherServices.js';



export function loadHome() {
  const app = document.querySelector('#app');

  app.innerHTML = `
    ${navbar()}

    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-slider">
        ${heroSlider([
        '/images/Bangalos-Zongo.jpeg',
        '/images/mutli-color-bird.jpg',
        '/images/mode-et-beaute.jpg'
      ])}

      <div class="hero-overlay"> 
        <h1>Congo Empire</h1>
        <p>Let's explore the Heart of Africa</p>
      </div>
    </section>

    <!-- WEATHER WIDGET -->
    ${weatherWidget()}

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
    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');
  }

  if (slides.length > 0) {
    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 4000);
  }
}

async function loadWeatherData() {
  //Specify the latitude and longitude of Trier, Germany using the information you have gathered and the examples provided.
  const lat = -4.322447;
  const lon = 15.307045;
  //Set the units to imperial: "units=imperial"
  const units = "metric";
  //Provide your API key: "appid=[enter your key here]"
  const apiKey = "d100c53e022ac740b8e46f1ae5caf79f";
  
  const data = await getWeather(lat, lon, "apiKey");

  const temp = Math.round(data.main.temp);
  const tempImperial = Math.round((temp* 9/5) + 32);

  document.querySelector("#city").textContent = data.name;
  document.querySelector("#current-temp").textContent = `${temp}°C`;
  document.querySelector("#temp-imperial").textContent = `${tempImperial}°F`;
  	


}