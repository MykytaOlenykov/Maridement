const navEl = document.querySelector('.js-nav');
const mobileMenu = document.querySelector('.js-menu-container');

navEl.addEventListener('click', e => {
  // btn.classList.add('button--active');

  // setTimeout(() => {
  //   btn.classList.remove('button--active');
  // }, 100);
  const targetEl = e.target;

  if (targetEl.classList.contains('js-link')) {
    document.body.classList.remove('body-lock');

    if (mobileMenu.classList.contains('menu-container--is-open')) {
      mobileMenu.classList.remove('menu-container--is-open');
    }
  }
});
