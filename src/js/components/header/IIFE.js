(function () {
  const header = document.querySelector('.js-header');

  if (window.scrollY >= 1) {
    header.classList.add('page-header--active');
  }
})();
