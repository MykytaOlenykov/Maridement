import debounce from 'lodash.debounce';

const header = document.querySelector('.js-header');

document.addEventListener(
  'scroll',
  debounce(onToggleFixeHeader, 300, { leading: true, trailing: true })
);

function onToggleFixeHeader() {
  console.log(1);
  if (window.scrollY >= 1) {
    if (!header.classList.contains('page-header--fixed')) {
      header.classList.add('page-header--fixed');
      document.body.style.paddingTop = `${header.clientHeight}px`;
    }
  } else {
    header.classList.remove('page-header--fixed');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('orientationchange', () => {
  setTimeout(() => {
    if (header.classList.contains('page-header--fixed')) {
      document.body.style.paddingTop = `${header.clientHeight}px`;
    }
  }, 100);
});
