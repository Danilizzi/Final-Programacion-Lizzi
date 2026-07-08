
    const carousel = document.querySelector('.hero-carousel');
    const prevButton = document.querySelector('.hero-prev');
    const nextButton = document.querySelector('.hero-next');
    const slideGap = 18;

    function moveCarousel(direction) {
      if (!carousel) return;
      const slide = carousel.querySelector('.hero-slide');
      if (!slide) return;
      const offset = slide.getBoundingClientRect().width + slideGap;
      carousel.scrollBy({ left: offset * direction, behavior: 'smooth' });
    }

    prevButton?.addEventListener('click', () => moveCarousel(-1));
    nextButton?.addEventListener('click', () => moveCarousel(1));

    const countdowns = document.querySelectorAll('.countdown[data-target]');

    function updateCountdowns() {
      const now = Date.now();

      countdowns.forEach((element) => {
        const targetTime = new Date(element.dataset.target).getTime();
        const difference = targetTime - now;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        element.textContent = `${String(days).padStart(2, '0')}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
      });
    }
    updateCountdowns();
    setInterval(updateCountdowns, 1000);
    const toastEl = document.getElementById('movieToast');
const toastMessage = document.getElementById('toastMessage');
const toast = toastEl ? new bootstrap.Toast(toastEl) : null;

document.querySelectorAll('#destacados .movie-card').forEach((card) => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    const title = card.dataset.movieTitle || 'Película';
    toastMessage.textContent = `${title} fue agregada a tu lista.`;
    toast?.show();
  });
});
const rateButton = document.querySelector('.rating-btn');

rateButton?.addEventListener('click', (e) => {
  const star = document.createElement('span');
  star.textContent = '★';
  star.className = 'star-burst';

  const rect = rateButton.getBoundingClientRect();
  star.style.left = `${rect.left + rect.width / 2}px`;
  star.style.top = `${rect.top + window.scrollY}px`;

  document.body.appendChild(star);

  star.addEventListener('animationend', () => star.remove());
});
