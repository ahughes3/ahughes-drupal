/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  Drupal.alivero = {};

  function isDesktopNav() {
    var navButtons = document.querySelector('[data-drupal-selector="mobile-buttons"]');
    return navButtons ? window.getComputedStyle(navButtons).getPropertyValue('display') === 'none' : false;
  }

  Drupal.alivero.isDesktopNav = isDesktopNav;
  var stickyHeaderToggleButton = document.querySelector('[data-drupal-selector="sticky-header-toggle"]');
  var siteHeaderFixable = document.querySelector('[data-drupal-selector="site-header-fixable"]');

  function stickyHeaderIsEnabled() {
    return stickyHeaderToggleButton.getAttribute('aria-checked') === 'true';
  }

  function setStickyHeaderStorage(expandedState) {
    var now = new Date();
    var item = {
      value: expandedState,
      expiry: now.getTime() + 20160000
    };
    localStorage.setItem('Drupal.alivero.stickyHeaderState', JSON.stringify(item));
  }

  function toggleStickyHeaderState(pinnedState) {
    if (isDesktopNav()) {
      if (pinnedState === true) {
        siteHeaderFixable.classList.add('is-expanded');
      } else {
        siteHeaderFixable.classList.remove('is-expanded');
      }

      stickyHeaderToggleButton.setAttribute('aria-checked', pinnedState);
      setStickyHeaderStorage(pinnedState);
    }
  }

  function getStickyHeaderStorage() {
    var stickyHeaderState = localStorage.getItem('Drupal.alivero.stickyHeaderState');
    if (!stickyHeaderState) return false;
    var item = JSON.parse(stickyHeaderState);
    var now = new Date();

    if (now.getTime() > item.expiry) {
      localStorage.removeItem('Drupal.alivero.stickyHeaderState');
      return false;
    }

    return item.value;
  }

  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    var fixableElements = document.querySelectorAll('[data-drupal-selector="site-header-fixable"], [data-drupal-selector="social-bar-inner"]');

    function toggleDesktopNavVisibility(entries) {
      if (!isDesktopNav()) return;
      entries.forEach(function (entry) {
        if (entry.intersectionRatio < 1) {
          fixableElements.forEach(function (el) {
            return el.classList.add('is-fixed');
          });
        } else {
          fixableElements.forEach(function (el) {
            return el.classList.remove('is-fixed');
          });
        }
      });
    }

    function getRootMargin() {
      var rootMarginTop = 72;
      var _document = document,
          body = _document.body;

      if (body.classList.contains('toolbar-fixed')) {
        rootMarginTop -= 39;
      }

      if (body.classList.contains('toolbar-horizontal') && body.classList.contains('toolbar-tray-open')) {
        rootMarginTop -= 40;
      }

      return "".concat(rootMarginTop, "px 0px 0px 0px");
    }

    function monitorNavPosition() {
      var primaryNav = document.querySelector('[data-drupal-selector="site-header"]');
      var options = {
        rootMargin: getRootMargin(),
        threshold: [0.999, 1]
      };
      var observer = new IntersectionObserver(toggleDesktopNavVisibility, options);

      if (primaryNav) {
        observer.observe(primaryNav);
      }
    }

    if (stickyHeaderToggleButton) {
      stickyHeaderToggleButton.addEventListener('click', function () {
        toggleStickyHeaderState(!stickyHeaderIsEnabled());
      });
    }

    var siteHeaderInner = document.querySelector('[data-drupal-selector="site-header-inner"]');

    if (siteHeaderInner) {
      siteHeaderInner.addEventListener('focusin', function () {
        if (isDesktopNav() && !stickyHeaderIsEnabled()) {
          var header = document.querySelector('[data-drupal-selector="site-header"]');
          var headerNav = header.querySelector('[data-drupal-selector="header-nav"]');
          var headerMargin = header.clientHeight - headerNav.clientHeight;

          if (window.scrollY > headerMargin) {
            window.scrollTo(0, headerMargin);
          }
        }
      });
    }

    monitorNavPosition();
    setStickyHeaderStorage(getStickyHeaderStorage());
    toggleStickyHeaderState(getStickyHeaderStorage());
  }
})(Drupal);