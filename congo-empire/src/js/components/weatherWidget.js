export function weatherWidget() {
  return `
    <section class="weather-section">

      <div class="card weather-card">

        <div class="weather-content">

          <h3>Current Weather in</h3>

          <strong><span id="city">Kinshasa</span></strong><br><br>

          <span id="current-temp">--°C</span><br><br>

          <div class="weather-flex">
            <img
              id="weather-icon"
              alt="Weather icon"
              loading="lazy"
            />

            <div id="description">Loading...</div>
          </div>

          <br>

          Humidity: <span id="humidity">--</span><br>
          Wind Speed: <span id="windSpeed">--</span><br>
          Wind Chill: <span id="windChill">N/A</span>

        </div>

      </div>

    </section>
  `;
}