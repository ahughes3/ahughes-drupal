/* eslint-disable no-alert */
Drupal.behaviors.clipboard = {
  attach() {
    const items = document.querySelectorAll('.clipboard-item');
    const pre = document.createElement('pre');
    const toast = document.createElement('span');
    toast.setAttribute('class', 'toast-copy');
    if (items) {
      items.forEach((item) => {
        const { copy } = item.dataset;
        item.addEventListener('click', () => {
          navigator.clipboard.writeText(copy);
          pre.textContent = `${copy}`;
          toast.textContent = `Copied to the clipboard.`;
          toast.classList.remove('hide');
          toast.prepend(pre);
          item.appendChild(toast);
          setTimeout(() => {
            toast.classList.add('hide');
          }, '1000');
        });
      });
    }
  },
};
