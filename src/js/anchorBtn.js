const btns = document.querySelectorAll('.js-anchor-btn');

btns.forEach(btn =>
  btn.addEventListener('click', e => {
    e.preventDefault();

    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  })
);
