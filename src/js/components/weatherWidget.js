export function weatherWidget() {
  return `
    <section class="weather-section">

      <div class="card weather-card">

        <div class="weather-content">
          <div class="weather-main">
            <h3>Current Weather in</h3><br>

            <strong><span id="city">Kinshasa</span></strong><br><br>

            <strong><span id="current-temp">27°C</span></strong>(<span id="temp-imperial">80.6°F</span>)<br><br>
          </div>

          <div class="weather-detail">
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

      </div>

    </section>
  `;
}