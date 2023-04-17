import debounce from 'lodash.debounce';

const header = document.querySelector('.js-header');

document.addEventListener(
  'scroll',
  debounce(
    () => {
      console.log(1);
      if (window.scrollY >= 1) {
        header.classList.add('page-header--fixed');
        document.body.style.paddingTop = `${header.clientHeight}px`;
      } else {
        header.classList.remove('page-header--fixed');
        document.body.style.paddingTop = 0;
      }
    },
    300,
    { leading: true }
  )
);
