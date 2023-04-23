import Swiper, { Navigation, Keyboard } from 'swiper';

new Swiper('.feedback-slider', {
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    1024: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    1280: {
      autoHeight: false,
      spaceBetween: 50,
      slidesPerView: 2.23,
    },
    1440: {
      autoHeight: false,
      spaceBetween: 50,
      slidesPerView: 2.23,
    },
    1450: {
      autoHeight: false,
      spaceBetween: 50,
      slidesPerView: 2.5,
    },
    1700: {
      autoHeight: false,
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
  sliderBtn.addEventListener('click', () => {
    sliderBtn.classList.add('swiper-button--active');

    setTimeout(() => {
      sliderBtn.classList.remove('swiper-button--active');
    }, 100);
  });
});
