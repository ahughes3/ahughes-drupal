Drupal.behaviors.headerHelper = {
  attach(context) {
    const searchFormSwitcherMediaQuery =
      window.matchMedia('(max-width: 480px)');
    const contactBtnSwitcherMediaQuery =
      window.matchMedia('(max-width: 959px)');
    const searchFormSwitcher = document.querySelector('.form-search');
    const toggleSpan = document.querySelector(
      '.hero__animation-toggle label .slider span',
    );

    if (context !== document) {
      return;
    }

    function handleTabletChange(e) {
      if (e.media === '(max-width: 480px)') {
        if (e.matches) {
          searchFormSwitcher.placeholder = 'Search';
        } else {
          searchFormSwitcher.placeholder = 'Search bizness.com';
        }
      } else {
        const contactBtn = document.querySelector(
          '.header__container .button--contact',
        );
        if (e.matches) {
          const headerWrapper = document.getElementById('main-nav');
          headerWrapper.append(contactBtn);
        } else {
          const headerContainer = document.querySelector('.header__container');
          headerContainer.append(contactBtn);
        }
      }
    }

    // eslint-disable-next-line func-names
    if (searchFormSwitcher) {
      searchFormSwitcherMediaQuery.addEventListener('change', function (e) {
        handleTabletChange(e);
      });

      contactBtnSwitcherMediaQuery.addEventListener('change', function (e) {
        handleTabletChange(e);
      });

      handleTabletChange(searchFormSwitcherMediaQuery);
      handleTabletChange(contactBtnSwitcherMediaQuery);
    }

    function pauseAnimations() {
      const toggleInput = document.querySelector(
        '.hero__animation-toggle input',
      );
      localStorage.setItem('animationStatus', 'off');
      toggleSpan.textContent = 'off';
      toggleInput.removeAttribute('checked');
      document.documentElement.setAttribute('data-animation-pause', 'true');
    }

    function unpauseAnimations() {
      const toggleInput = document.querySelector(
        '.hero__animation-toggle input',
      );
      localStorage.setItem('animationStatus', 'on');
      toggleSpan.textContent = 'on';
      toggleInput.setAttribute('checked', '');
      document.documentElement.setAttribute('data-animation-pause', 'false');
    }

    document
      .getElementById('animation-toggle')
      .addEventListener('change', (e) => {
        if (e.target.hasAttribute('checked')) {
          pauseAnimations();
        } else {
          unpauseAnimations();
        }
      });

    window.addEventListener('load', () => {
      const animationStatus = localStorage.getItem('animationStatus');

      if (
        animationStatus === 'off' ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        // if localStorage has already been set to off
        // of if the user has set reduced motion on their device
        // pause animations
        pauseAnimations();
      } else {
        unpauseAnimations();
      }
    });
  },
};
