// import * as basicLightbox from 'basiclightbox';

const modalEl = document.querySelector('[data-modal]');
const feedbacksContainer = document.querySelector('.js-feedbacks');

feedbacksContainer.addEventListener('click', e => {
  const feedbackSlideEl = e.target.closest('.js-feedback-slide');

  if (
    !feedbackSlideEl ||
    !feedbackSlideEl.classList.contains('swiper-slide-active')
  ) {
    return;
  }

  const feedbackCardEl = feedbackSlideEl.firstElementChild;

  const reviewerName = feedbackCardEl.firstElementChild.innerText;
  const review = feedbackCardEl.lastElementChild.innerText;

  showModal(reviewerName, review);
});

function showModal(reviewerName, review) {
  modalEl.firstElementChild.innerHTML = `
      <div class="modal__card">
          <p class="modal__reviewer-name">${reviewerName}</p>
          <p class="modal__review">${review}</p>
      </div>
    `;

  document.body.classList.add('body-lock');
  modalEl.classList.remove('backdrop--is-hidden');

  modalEl.addEventListener('click', hideModal);
  window.addEventListener('keydown', hideModal);
}

function hideModal(e) {
  if (e.target.classList.contains('backdrop') || e.code === 'Escape') {
    document.body.classList.remove('body-lock');
    modalEl.classList.add('backdrop--is-hidden');

    modalEl.removeEventListener('click', hideModal);
    window.removeEventListener('keydown', hideModal);
  }
}
