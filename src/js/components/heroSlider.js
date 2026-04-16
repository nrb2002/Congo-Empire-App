export function heroSlider(images = []) {
  const slides = images
    .map((img, index) => {
      return `
        <div class="slide ${index === 0 ? 'active' : ''}">
          <img src="${img}" alt="slide ${index + 1}">
        </div>
      `;
    })
    .join('');

  return `
    <div class="hero-slider">
      ${slides}
    </div>
  `;
}