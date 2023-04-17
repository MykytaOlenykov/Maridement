const navEl = document.querySelector('.js-nav');
const links = document.querySelectorAll('.site-nav__link');
const mobileMenu = document.querySelector('.js-menu-container');

navEl.addEventListener('click', e => {
  e.preventDefault();

  document.body.classList.remove('body-lock');

  document.querySelector(e.target.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
  });

  if (mobileMenu.classList.contains('menu-container--is-open')) {
    mobileMenu.classList.remove('menu-container--is-open');
  }
});
