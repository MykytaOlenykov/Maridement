const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');

openMenuBtn.addEventListener('click', onOpenMenu);
closeMenuBtn.addEventListener('click', onCloseMenu);

function onOpenMenu() {
  openMenuBtn.setAttribute('aria-expanded', true);
  mobileMenu.classList.add('menu-container--is-open');
  document.body.style.overflowY = 'hidden';
}

function onCloseMenu() {
  openMenuBtn.setAttribute('aria-expanded', false);
  mobileMenu.classList.remove('menu-container--is-open');
  document.body.style.overflowY = 'scroll';
}

window.matchMedia('(min-width: 1024px)').addEventListener('change', e => {
  if (!e.matches) return;

  mobileMenu.classList.remove('menu-container--is-open');
  openMenuBtn.setAttribute('aria-expanded', false);
  document.body.style.overflowY = 'scroll';
});
