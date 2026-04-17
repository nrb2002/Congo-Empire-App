export function exploreWidget() {
  const items = [
    { title: "Attractions", icon: "🏞️", link: "places.html" },
    { title: "Hotels", icon: "🏨", link: "hotels.html" },
    { title: "Restaurants", icon: "🍽️", link: "restaurants.html" },
    { title: "Events", icon: "🎉", link: "events.html" }
  ];

  return `
    <section class="explore-section">
        <h2 class="section-title">Explore</h2>
        <div class="explore-container">
            ${items.map(item => `
            <a href="${item.link}" class="explore-card">
                <div class="explore-icon">${item.icon}</div>
                <span>${item.title}</span>
            </a>
            `).join('')}
        </div>

        <div class="explore-cta">
            <span class="cta">See all</span>
            <span class="arrow">→</span>
        </div>
    </section>
  `;
}