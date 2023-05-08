import Swiper, { Navigation, Keyboard } from 'swiper';

new Swiper('.feedback-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    1024: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    1280: {
      spaceBetween: 50,
      slidesPerView: 2.23,
    },
    1440: {
      spaceBetween: 50,
      slidesPerView: 2.23,
    },
    1450: {
      spaceBetween: 50,
      slidesPerView: 2.5,
    },
    1700: {
      spaceBetween: 50,
      slidesPerView: 3,
    },
  },
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  speed: 500,
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

const sliderBtns = document.querySelectorAll('.js-swiper-btn');

sliderBtns.forEach(sliderBtn => {
  sliderBtn.addEventListener('mousedown', () => {
    sliderBtn.classList.add('swiper-button--active');
  });
  sliderBtn.addEventListener('mouseup', () => {
    sliderBtn.classList.remove('swiper-button--active');
  });
});
