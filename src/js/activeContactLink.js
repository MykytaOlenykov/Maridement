const contactList = document.querySelector('.js-contact-list');

contactList.addEventListener('click', e => {
  const targetEl = e.target;

  if (targetEl.closest('.js-contact-link')) {
    targetEl.classList.add('contact-list__link--active');

    setTimeout(() => {
      targetEl.classList.remove('contact-list__link--active');
    }, 100);
  }
});
