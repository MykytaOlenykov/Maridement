const btnsEl = document.querySelectorAll('.js-btn-active');

btnsEl.forEach(btn => {
  btn.addEventListener('mousedown', () => {
    btn.classList.add('button--active');
  });
  btn.addEventListener('mouseup', () => {
    btn.classList.remove('button--active');
  });
});
