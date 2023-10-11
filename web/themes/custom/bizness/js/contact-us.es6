/* eslint-disable no-undef */

'use strict';

(function behaviors() {
  /*
   * Send GA Event when contact form has been clicked
   */
  Drupal.behaviors.contactForm = {
    attach: function attach(context) {
      if (document === context) {
        // Assuming there's only one contact form on the page
        const $contactForm = document.querySelector(
          '.webform-submission-contact-form',
        );
        $contactForm.addEventListener('submit', (e) => {
          const formData = new FormData(e.target);
          const formProps = Object.fromEntries(formData);
          Attribution.identify(formProps.email, {
            email: formProps.email,
            name: formProps.name,
            companyName: formProps.subject,
            companyId: formProps.subject,
          });
          Attribution.track('Contact form');
        });
      }
    },
  };
})();
