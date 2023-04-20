const faqList = document.querySelector('.js-faq-list');

faqList.addEventListener('click', e => {
  const targetEl = e.target.closest('.js-faq-button');

  if (targetEl) {
    targetEl.classList.add('faq-list__button--active');

    setTimeout(() => {
      targetEl.classList.remove('faq-list__button--active');
    }, 100);

    targetEl
      .closest('.js-faq-item')
      .classList.toggle('faq-list__item--show-answer');
  }
});
