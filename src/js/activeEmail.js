const link = document.querySelector('.js-address-link');

link.addEventListener('click', () => {
  link.classList.add('page-address__email--active');

  setTimeout(() => {
    link.classList.remove('page-address__email--active');
  }, 100);
});
