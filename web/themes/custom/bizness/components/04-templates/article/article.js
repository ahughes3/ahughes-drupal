Drupal.behaviors.article = {
  attach() {
    const gap = 48;
    const positionFixed = 72;
    const node = document.querySelector('.node');

    function elementCrosses(fixed, cross) {
      const parent = fixed.parentElement;
      const fixedRect = fixed.getBoundingClientRect();
      const crossRect = cross.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();

      if (parentRect.top >= positionFixed) {
        delete parent.dataset.align;
      } else if (
        fixedRect.top >= positionFixed ||
        parent.dataset.align !== 'bottom'
      ) {
        parent.dataset.align = 'fixed';
      }

      if (fixedRect.top + fixedRect.height + gap > crossRect.top) {
        parent.dataset.align = 'bottom';
      }
    }

    if (node && !node.dataset?.jsProcessed) {
      node.dataset.jsProcessed = true;

      const sidebar = node.querySelector('.node-article__sidebar');
      const authors = node.querySelector('.node-article__authors');
      const { dataset } = sidebar.parentElement;

      if (sidebar) {
        document.addEventListener('scroll', () => {
          elementCrosses(sidebar, authors);
        });

        window.addEventListener('resize', () => delete dataset.limit, true);
      }
    }
  },
};
