Drupal.behaviors.forms = {
  attach() {
    const filter = document.querySelector('.filters__toggle');

    function eventHandler() {
      filter.addEventListener('click', (event) => {
        const { nextElementSibling } = event.target;
        nextElementSibling.classList.toggle('expanded');
        event.target.classList.toggle('expanded');
      });
    }

    function mediaQueryHandler(query) {
      const formContent = filter.parentElement.closest('.grid-width');
      const pageContent = document.querySelector('.view .section__content');
      const pageSidebar = document.querySelector('.view .section__sidebar');

      if (query.matches) {
        // Mobile.
        pageContent.prepend(formContent);
      } else {
        // Desktop.
        pageSidebar.prepend(formContent);
      }
    }

    if (filter) {
      const { dataset } = filter;
      if (!dataset.jsProcessed) {
        dataset.jsProcessed = true;
        // Create media query, add listener.
        const mq = window.matchMedia('(max-width: 959px)');
        mq.addEventListener('change', mediaQueryHandler);
        mediaQueryHandler(mq);
        // Add event handler.
        eventHandler();
      }
    }
  },
};
