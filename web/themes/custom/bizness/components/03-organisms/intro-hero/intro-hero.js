Drupal.behaviors.introHero = {
  debounce(callback, wait) {
    let timeoutId = null;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback(...args);
      }, wait);
    };
  },

  attach(context) {
    if (context !== document) {
      return;
    }

    const brands = document.querySelector('.brands__items');
    const staticTextSpan = document.getElementById('static-text');
    const typedTextSpan = document.getElementById('type-text');
    const cursorSpan = document.querySelector('.cursor');
    const typewriterElem = document.getElementById('typewriter-effect');
    const textArray = typewriterElem
      ? typewriterElem.getAttribute('data-typewriter-values').split(', ')
      : [];
    const typingDelay = 180;
    const erasingDelay = 100;
    const newTextDelay = 2600; // Delay between current and next text
    let typewriterTimeout;
    let typewriterHeight = 0;
    let textArrayIndex = 0;
    let charIndex = 0;
    const config = { attributeFilter: ['data-animation-pause'] };

    // Avoids content jumps when typing and newlines are created.
    function setMaxHeight() {
      if (
        document.documentElement.getAttribute('data-animation-pause') ===
          'false' ||
        document.documentElement.getAttribute('data-animation-pause') === null
      ) {
        typewriterHeight = 0;
        const originalTextContent = typedTextSpan.textContent;
        typewriterElem.style.height = null;
        textArray.forEach((element) => {
          typedTextSpan.textContent = element;
          if (typewriterHeight < typewriterElem.offsetHeight) {
            typewriterHeight = typewriterElem.offsetHeight;
          }
        });
        typewriterElem.style.height = `${typewriterHeight}px`;
        typedTextSpan.textContent = originalTextContent;
      }
    }

    function addBrandAnimation() {
      if (!brands.parentElement.classList.contains('animated')) {
        brands.parentElement.classList.add('animated');
        const children = brands.querySelectorAll('li');
        children?.forEach((child) => {
          const cloneNode = child.cloneNode(true);
          if (cloneNode.classList.contains('last')) {
            cloneNode.classList.remove('last');
          }
          brands.appendChild(cloneNode);
        });
      }
    }

    function removeBrandAnimation() {
      if (brands.parentElement.classList.contains('animated')) {
        brands.parentElement.classList.remove('animated');
        const children = brands.querySelectorAll('li.last ~ li');
        children?.forEach((child) => child.remove());
      }
    }

    // Handle media query matches.
    function mediaQueryHandler(query) {
      if (query.matches) {
        // Mobile.
        addBrandAnimation();
      } else {
        // Desktop.
        removeBrandAnimation();
      }
    }

    function type(eraseFn) {
      if (localStorage.getItem('animationStatus') === 'off') return;
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains('typing'))
          cursorSpan.classList.add('typing');
        typedTextSpan.textContent +=
          textArray[textArrayIndex].charAt(charIndex);
        charIndex += 1;
        setTimeout(type, typingDelay, eraseFn);
      } else {
        cursorSpan.classList.remove('typing');
        setTimeout(eraseFn, newTextDelay);
      }
    }

    function erase() {
      if (localStorage.getItem('animationStatus') === 'off') return;
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains('typing'))
          cursorSpan.classList.add('typing');
        typedTextSpan.textContent = textArray[textArrayIndex].substring(
          0,
          charIndex - 1,
        );
        charIndex -= 1;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove('typing');
        textArrayIndex += 1;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100, erase);
      }
    }

    function pauseTypewriter() {
      staticTextSpan.textContent = typewriterElem.getAttribute('aria-label');
      typewriterElem.style.height = 'auto';
      typedTextSpan.textContent = '';
      charIndex = 0;
      clearTimeout(typewriterTimeout);
    }

    function startTypewriter() {
      staticTextSpan.textContent = typewriterElem.getAttribute(
        'data-typewriter-static',
      );
      typewriterElem.style.height = `${typewriterHeight}px`;
      typewriterTimeout = setTimeout(type, newTextDelay + 250, erase);
    }

    const htmlObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        const pauseStatus = mutation.target.getAttribute(
          'data-animation-pause',
        );
        if (pauseStatus === 'true') {
          if (typewriterElem) pauseTypewriter();
        } else if (pauseStatus === 'false') {
          if (typewriterElem) startTypewriter();
        }
      });
    });

    htmlObserver.observe(document.documentElement, config);

    window.addEventListener('load', () => {
      if (brands) {
        const { dataset } = brands;
        if (!dataset.jsProcessed) {
          dataset.jsProcessed = true;

          // Add animation when there are more than 5 logos.
          const { length } = brands.querySelectorAll('li');
          if (length > 5) {
            addBrandAnimation();
          } else {
            // Add animation on small devices.
            const mq = window.matchMedia('(max-width: 767px)');
            mq.addEventListener('change', mediaQueryHandler);
            mediaQueryHandler(mq);
          }
        }
      }

      if (typewriterElem) {
        setMaxHeight();
        window.addEventListener('resize', this.debounce(setMaxHeight, 50));
      }
    });
  },
};
