import throttle from 'lodash.throttle';

const header = document.querySelector('.js-header');

document.addEventListener('scroll', throttle(onToggleActiveHeader, 500));

function onToggleActiveHeader() {
  if (window.scrollY >= 1) {
    if (!header.classList.contains('page-header--active')) {
      header.classList.add('page-header--active');
    }
  } else {
    header.classList.remove('page-header--active');
  }
}
