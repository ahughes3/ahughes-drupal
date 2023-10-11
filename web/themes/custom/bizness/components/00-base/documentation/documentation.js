Drupal.behaviors.docsHelper = {
  attach() {
    const items = document.querySelectorAll('[class$="param--anchor"]');
    if (items?.length) {
      items.forEach((item) => {
        const paramClass = item.classList[0].replace('--anchor', '');
        const parent = item.closest('.accordion-item__text');
        const param = parent.querySelector(`.${paramClass}`);

        item.addEventListener('mouseover', () => {
          param.classList.add('param--focused');
        });

        item.addEventListener('mouseout', () => {
          param.classList.remove('param--focused');
        });
      });
    }

    const breakpoints = document.querySelector('[name="breakpoints-select"]');
    if (breakpoints) {
      breakpoints.onchange = (event) => {
        const parent = breakpoints.closest('.accordion-item__content');
        const image = parent.querySelector('.accordion-item__image');
        const inputText = event.target.value;
        image.dataset.image = inputText;
      };
    }

    const codesnippets = document.querySelectorAll('code');
    if (codesnippets?.length) {
      codesnippets.forEach((item) => {
        const copyButton = document.createElement('button');
        copyButton.title = 'copy';

        copyButton.onclick = async () => {
          let copyText = item.innerText;
          const parent = item.closest('.accordion-item--breakpoints');
          if (parent) {
            const inner = item.cloneNode(true);
            const select = item.querySelector('select');
            inner.innerHTML = inner.innerHTML.replace(
              select.outerHTML,
              select.value,
            );
            copyText = inner.innerText;
          }
          await navigator.clipboard.writeText(copyText);
          alert('Content copied to clipboard');
        };
        item.append(copyButton);
      });
    }
  },
};
