Drupal.behaviors.textLong = {
  attach() {
    const items = document.querySelectorAll('.text-long');
    if (items?.length) {
      items.forEach((item) => {
        const quotes = item.querySelectorAll('blockquote');
        if (quotes?.length) {
          quotes.forEach((quote) => {
            const { dataset } = quote;
            if (!dataset.jsProcessed) {
              dataset.jsProcessed = true;
              // Required variables.
              const prevSibling = quote.previousSibling;
              const wrapper = document.createElement('div');
              // Wrap component.
              wrapper.classList.add('blockquote__wrapper');
              wrapper.appendChild(quote);
              // Assign original position.
              item.insertBefore(wrapper, prevSibling);
              // Assign quote size.
              const size = quote.textContent.length > 220 ? 'sm' : 'lg';
              quote.classList.add('blockquote', `blockquote--${size}`);
            }
          });
        }
      });
    }
  },
};
