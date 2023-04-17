const header = document.querySelector('.js-header');

document.addEventListener('scroll', onToggleFixedHeader);

function onToggleFixedHeader() {
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
