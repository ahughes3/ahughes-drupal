/* eslint-disable no-alert */
Drupal.behaviors.displayGradients = {
  attach() {
    const gradients = document.querySelectorAll('.cl-gradients__item');
    if (gradients) {
      gradients.forEach((gradient) => {
        const { dataset } = gradient;
        if (!gradient.dataset.jsProcessed) {
          dataset.jsProcessed = true;
          const swatch = gradient.querySelector('.cl-gradients__swatch');
          const { color, from, to } = swatch.dataset;

          if (gradient.classList.contains('cl-gradients__item--solid')) {
            swatch.style.background = `linear-gradient(225deg, var(--c-${color}-${from}) 0%, var(--c-${color}-${to}) 100%)`;
          }
        }
      });
    }
  },
};
