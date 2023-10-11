Drupal.behaviors.mainMenu = {
  attach() {
    // Body element.
    const bodyEl = document.querySelector('body');
    // Hamburger menu icon toggle.
    const toggleExpand = document.getElementById('toggle-expand');
    // Mobile menu itself.
    const menu = document.getElementById('main-nav');
    // Overlay element.
    const overlayEl = document.querySelector('.overlay');

    function trapFocus(element) {
      const focusableEls = element.querySelectorAll(
        'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])',
      );
      const firstFocusableEl = focusableEls[0];
      const lastFocusableEl = focusableEls[focusableEls.length - 1];
      const KEYCODE_TAB = 9;
      const KEYCODE_ESC = 27;

      element.addEventListener('keydown', (e) => {
        const isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;
        const isEscPressed = e.key === 'Escape' || e.keyCode === KEYCODE_ESC;

        if (!isTabPressed && !isEscPressed) {
          return;
        }

        if (isEscPressed) {
          // esc
          toggleExpand.click();
        } else if (e.shiftKey) {
          // shift + tab
          if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            e.preventDefault();
          }
        } else if (document.activeElement === lastFocusableEl) {
          // tab
          firstFocusableEl.focus();
          e.preventDefault();
        }
      });
    }

    if (menu) {
      const expandMenu = menu.getElementsByClassName('expand-sub');

      // Mobile Menu Show/Hide.
      toggleExpand.addEventListener('click', () => {
        toggleExpand.classList.toggle('toggle-expand--open');
        bodyEl.classList.toggle('js-overlay-active');

        if (toggleExpand.classList.contains('toggle-expand--open')) {
          toggleExpand.setAttribute('aria-expanded', 'true');
          overlayEl.style.display = 'block';
          trapFocus(document.querySelector('.header__menu'));
        } else {
          toggleExpand.setAttribute('aria-expanded', 'false');
          overlayEl.style.display = 'none';
        }

        menu.classList.toggle('main-nav--open');
      });

      // Click outside mobile nav closes the menu.
      overlayEl.addEventListener('click', () => {
        toggleExpand.click();
      });

      // Expose mobile sub menu on click.
      Array.from(expandMenu).forEach((item) => {
        item.addEventListener('click', (e) => {
          const menuItem = e.currentTarget;
          const subMenu = menuItem.nextElementSibling;

          menuItem.classList.toggle('expand-sub--open');
          subMenu.classList.toggle('main-menu--sub-open');
        });
      });
    }
  },
};
