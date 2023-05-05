const contactList = document.querySelector('.js-contact-list');

contactList.addEventListener('click', e => {
  const linkEl = e.target.closest('.js-contact-link');

  if (linkEl) {
    linkEl.classList.add('contact-list__link--active');

    setTimeout(() => {
      linkEl.classList.remove('contact-list__link--active');
    }, 100);
  }
});
