export function navbar() {
  return `
    <header class="header">
      <div class="logo">Congo Empire</div>

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
