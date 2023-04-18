const btns = document.querySelectorAll('.js-anchor-btn');

btns.forEach(btn =>
  btn.addEventListener('click', e => {
    e.preventDefault();

    btn.classList.add('button--active');

    setTimeout(() => {
      btn.classList.remove('button--active');
    }, 100);

    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  })
);
