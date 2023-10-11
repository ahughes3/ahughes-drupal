Drupal.behaviors.accordionList = {
  attach() {
    const accordionList = document.querySelectorAll('.accordion-item');

    function accordingHandlingEvents() {
      accordionList.forEach((item) => {
        const { dataset } = item;
        if (!dataset.jsProcessed) {
          dataset.jsProcessed = true;
          item
            .querySelector('.accordion-item__heading')
            .addEventListener('click', () => {
              item.classList.toggle('collapsed');
            });
        }
      });
    }

    function setAccordionHeight() {
      accordionList.forEach((item) => {
        item.classList.remove('collapsed');
        const content = item.querySelector('.accordion-item__content');
        const bufferedHeight = `${content.scrollHeight + 16}px`;

        content.style.setProperty('--buffered-height', bufferedHeight);
        item.classList.add('collapsed');
      });
    }

    function initAccordionList() {
      setAccordionHeight();
      accordingHandlingEvents();
    }

    if (accordionList?.length) {
      initAccordionList();
      window.addEventListener('resize', setAccordionHeight, true);
    }
  },
};
