const contactList = document.querySelector('.js-contact-list');

contactList.addEventListener('mousedown', e => {
  const linkEl = e.target.closest('.js-contact-link');

  if (linkEl) {
    linkEl.classList.add('contact-list__link--active');
  }
});

contactList.addEventListener('mouseup', e => {
  const linkEl = e.target.closest('.js-contact-link');

  if (linkEl) {
    linkEl.classList.remove('contact-list__link--active');
  }
});
