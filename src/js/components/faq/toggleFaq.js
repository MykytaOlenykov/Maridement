import { faqData } from '../../../db/faq';
import { createMarkup } from './faqMarkup';

const faqList = document.querySelector('.js-faq-list');

const markup = createMarkup(faqData);

faqList.innerHTML = markup;

faqList.addEventListener('mousedown', e => {
  const btnEl = e.target.closest('.js-faq-button');

  if (!btnEl) {
    return;
  }

  btnEl.classList.add('faq-list__button--active');
});

faqList.addEventListener('mouseup', e => {
  const btnEl = e.target.closest('.js-faq-button');

  if (!btnEl) {
    return;
  }

  btnEl.classList.remove('faq-list__button--active');
});

faqList.addEventListener('click', e => {
  const btnEl = e.target.closest('.js-faq-button');

  if (!btnEl) {
    return;
  }

  const itemEl = btnEl.closest('.js-faq-item');
  const activeEl = faqList.querySelector('.faq-list__item--show-answer');

  if (activeEl && itemEl !== activeEl) {
    activeEl.classList.remove('faq-list__item--show-answer');
  }

  itemEl.classList.toggle('faq-list__item--show-answer');
});
