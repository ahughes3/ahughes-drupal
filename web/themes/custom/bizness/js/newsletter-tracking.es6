/* eslint-disable no-undef */

'use strict';

(function behaviors() {
  /*
   * Send Attribution identify and tracking event when the mailchimp form has been submitted
   */
  Drupal.behaviors.newsletterTracking = {
    attach: function attach(context) {
      if (document === context) {
        const $webform = document.querySelector(
          '#mailchimp-signup-subscribe-block-global-signup-form',
        );
        $webform.addEventListener('submit', (e) => {
          const formData = new FormData(e.target);
          const formProps = Object.fromEntries(formData);
          Attribution.identify(formProps['mergevars[EMAIL]'], {
            email: formProps['mergevars[EMAIL]'],
            firstName: formProps['mergevars[FNAME]'],
            lastName: formProps['mergevars[LNAME]'],
          });
          Attribution.track('Newsletter subscription');
        });
      }
    },
  };
})();
