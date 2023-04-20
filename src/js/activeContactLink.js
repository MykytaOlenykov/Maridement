const contactList = document.querySelector('.js-address');

contactList.addEventListener('click', e => {
  const targetEl = e.target.closest('.js-contact-link');

  if (targetEl?.classList.contains('js-contact-link')) {
    targetEl.classList.add('contact-list__link--active');

    setTimeout(() => {
      targetEl.classList.remove('contact-list__link--active');
    }, 100);
  }
});
