import throttle from 'lodash.throttle';

const header = document.querySelector('.js-header');
const body = document.body;

document.addEventListener('scroll', throttle(onToggleFixedHeader, 500));

function onToggleFixedHeader() {
  if (window.scrollY >= 1) {
    if (!header.classList.contains('page-header--fixed')) {
      header.classList.add('page-header--fixed');
      body.style.paddingTop = `${header.clientHeight}px`;
    }
  } else {
    header.classList.remove('page-header--fixed');
    body.style.paddingTop = 0;
  }
}

window.addEventListener('orientationchange', () => {
  setTimeout(() => {
    if (header.classList.contains('page-header--fixed')) {
      body.style.paddingTop = `${header.clientHeight}px`;
    }
  }, 100);
});
