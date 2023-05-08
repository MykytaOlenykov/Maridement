const navEl = document.querySelector('.js-nav');
const mobileMenu = document.querySelector('.js-menu-container');

navEl.addEventListener('mousedown', e => {
  const targetEl = e.target;

  if (targetEl.classList.contains('js-site-nav-link')) {
    targetEl.classList.add('site-nav__link--active');
  }
});

navEl.addEventListener('mouseup', e => {
  const targetEl = e.target;

  if (targetEl.classList.contains('js-site-nav-link')) {
    targetEl.classList.remove('site-nav__link--active');

    document.body.classList.remove('body-lock');

    if (mobileMenu.classList.contains('menu-container--is-open')) {
      mobileMenu.classList.remove('menu-container--is-open');
    }
  }
});
