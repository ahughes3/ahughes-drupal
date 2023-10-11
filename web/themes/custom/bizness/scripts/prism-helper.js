'use strict';
(function () {

  /*
  * PrismJS helper
  */
  Drupal.behaviors.prism = {
    'attach': function (context) {
      if (document === context) {
        const noLangCodeBlocks = document.querySelectorAll('.text-long pre:not([class*="language-"])');

        // Add a default language so Prism will insert line numbers and formatting.
        noLangCodeBlocks.forEach(el => el.classList.add('language-not-specified'));
      }
    },
  };
})();
