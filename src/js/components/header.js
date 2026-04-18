export function header() {
  return `
    <header class="header">
      <div class="logo">
        <img src="/images/logo/logo-cge-white.png" alt="Congo Empire" class="logo">
      </div>

      <nav class="nav" id="nav-menu">
        <a href="/index.html" data-link>Home</a>
        <a href="/places.html" data-link>Places</a>
        <a href="/favorites.html" data-link>Favorites</a>
      </nav>

      <div class="menu-icon" id="menu-toggle">
        <span id="menu-icon">☰</span>
      </div>
    </header>

    <div class="overlay" id="overlay"></div>
  `;
}
