import { loadHome } from './pages/home.js';
import { loadWeather } from './pages/weather.js';
import { loadPlaces } from './pages/places.js';
import { loadMap } from './pages/map.js';
import { loadFavorites } from './pages/favorites.js';

export function initApp() {
  const page = document.body.dataset.page;

  switch (page) {
    case 'home':
      loadHome();
      break;
    case 'weather':
      loadWeather();
      break;
    case 'places':
      loadPlaces();
      break;
    case 'map':
      loadMap();
      break;
    case 'favorites':
      loadFavorites();
      break;
    default:
      loadHome();
  }
}