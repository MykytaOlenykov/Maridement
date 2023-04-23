import Swiper, { Navigation, Keyboard } from 'swiper';

new Swiper('.feedback-slider', {
  autoHeight: true,
  grabCursor: true,
  loop: true,
  speed: 500,
  slidesPerView: 1,
  spaceBetween: 30,
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

// centeredSlides: true,

const sliderBtns = document.querySelectorAll('.js-swiper-btn');

sliderBtns.forEach(sliderBtn => {
  sliderBtn.addEventListener('click', () => {
    sliderBtn.classList.add('swiper-button--active');

    setTimeout(() => {
      sliderBtn.classList.remove('swiper-button--active');
    }, 100);
  });
});
