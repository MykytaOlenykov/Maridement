const btnsEl = document.querySelectorAll('.js-btn-modal');

btnsEl.forEach(btn =>
  btn.addEventListener('click', () => {
    btn.classList.add('button--active');

    setTimeout(() => {
      btn.classList.remove('button--active');
    }, 100);
  })
);
