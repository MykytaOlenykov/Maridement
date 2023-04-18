const navEl = document.querySelector('.js-nav');
const mobileMenu = document.querySelector('.js-menu-container');

navEl.addEventListener('click', () => {
  document.body.classList.remove('body-lock');

  if (mobileMenu.classList.contains('menu-container--is-open')) {
    mobileMenu.classList.remove('menu-container--is-open');
  }
});
