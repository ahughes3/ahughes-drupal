Drupal.behaviors.imageList = {
  attach() {
    function addInfoButton(caption) {
      const parent = caption.closest('li');
      const infoButton = document.createElement('button');
      infoButton.title = 'info';
      infoButton.className = 'image-list__info';

      const icon = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'svg',
      );
      const iconUse = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'use',
      );
      iconUse.setAttributeNS(
        'http://www.w3.org/1999/xlink',
        'xlink:href',
        '/themes/custom/bizness/dist/icons.svg#info',
      );
      icon.appendChild(iconUse);
      infoButton.appendChild(icon);
      parent.prepend(infoButton);
    }

    const collages = document.querySelectorAll('.image-list--collage');
    if (collages?.length) {
      collages.forEach((collage) => {
        const { dataset } = collage;
        if (!dataset.jsProcessed) {
          dataset.jsProcessed = true;

          const captions = collage.querySelectorAll('.caption');
          if (captions?.length) {
            captions.forEach(addInfoButton);
          }
        }
      });
    }
  },
};
