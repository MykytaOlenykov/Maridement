const faqList = document.querySelector('.js-faq-list');

faqList.addEventListener('click', e => {
  const btnEl = e.target.closest('.js-faq-button');

  if (!btnEl) {
    return;
  }

  btnEl.classList.add('faq-list__button--active');

  setTimeout(() => {
    btnEl.classList.remove('faq-list__button--active');
  }, 100);

  // test feature
  const itemEl = btnEl.closest('.js-faq-item');
  const activeEl = faqList.querySelector('.faq-list__item--show-answer');

  if (activeEl && itemEl !== activeEl) {
    activeEl.classList.remove('faq-list__item--show-answer');
  }

  itemEl.classList.toggle('faq-list__item--show-answer');
});
