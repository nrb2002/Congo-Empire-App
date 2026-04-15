import { loadHome } from './pages/home.js';
// import { loadWeather } from './pages/weather.js';
// import { loadPlaces } from './pages/places.js';
// import { loadMap } from './pages/map.js';
// import { loadFavorites } from './pages/favorites.js';

export function initApp() {
  const page = document.body.dataset.page || 'home';

  const routes = {
    home: loadHome,
    // weather: loadWeather,
    // places: loadPlaces,
    // map: loadMap,
    // favorites: loadFavorites,
  };

  (routes[page] || loadHome)();
}