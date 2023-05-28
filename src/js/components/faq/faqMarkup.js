export function createMarkup(data) {
  return data
    .map(
      faq => `
        <li class="faq-list__item js-faq-item">
          <p class="faq-list__question">${faq.question}</p>
          <p class="faq-list__answer">${faq.answer}
          </p>
          <button class="faq-list__button js-faq-button" type="button" aria-label="Кнопка перемикання FAQ">
          </button>
        </li>
    `
    )
    .join('');
}
