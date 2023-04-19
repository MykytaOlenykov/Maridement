const navEl = document.querySelector('.js-nav');
const mobileMenu = document.querySelector('.js-menu-container');

navEl.addEventListener('click', e => {
  const targetEl = e.target;

  if (targetEl.classList.contains('js-link')) {
    targetEl.classList.add('site-nav__link--active');

    setTimeout(() => {
      targetEl.classList.remove('site-nav__link--active');
    }, 100);

    document.body.classList.remove('body-lock');

    if (mobileMenu.classList.contains('menu-container--is-open')) {
      mobileMenu.classList.remove('menu-container--is-open');
    }
  }
});
