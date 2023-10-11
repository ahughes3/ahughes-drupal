Drupal.behaviors.displayColorDefinitions = {
  attach() {
    function hex(x) {
      return `0${parseInt(x, 10).toString(16)}`.slice(-2);
    }

    function rgb2hex(color) {
      const rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      return `#${hex(rgb[1])}${hex(rgb[2])}${hex(rgb[3])}`;
    }

    const swatches = document.querySelectorAll('.cl-palettes__swatch');
    if (swatches) {
      swatches.forEach((swatch) => {
        const color = window
          .getComputedStyle(swatch, null)
          .getPropertyValue('background-color');
        const definition = swatch.parentNode.querySelector(
          '.cl-palettes__definition',
        );
        definition.textContent = rgb2hex(color);
      });
    }
  },
};
