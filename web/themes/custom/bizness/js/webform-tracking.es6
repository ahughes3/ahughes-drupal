/* eslint-disable no-undef */

'use strict';

(function behaviors() {
  /*
   * Send Attribution identify and tracking event when a gated content form has been submitted
   */
  Drupal.behaviors.webformTracking = {
    attach: function attach(context) {
      if (document === context) {
        const $webform = document.querySelector('.webform-gated-content');
        $webform.addEventListener('submit', (e) => {
          const formData = new FormData(e.target);
          const formProps = Object.fromEntries(formData);
          Attribution.identify(formProps.email, {
            email: formProps.email,
            firstName: formProps.name,
            lastName: formProps.last_name,
            companyId: formProps.subject,
            companyName: formProps.subject,
          });
          Attribution.track('Gated content form');
        });
      }
    },
  };
})();
