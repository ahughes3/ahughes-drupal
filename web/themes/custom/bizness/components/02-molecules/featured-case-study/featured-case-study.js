import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

Drupal.behaviors.featuredCaseStudy = {
  attach(context) {
    if (context !== document) {
      return;
    }

    // without this line, ScrollTrigger may get dropped by our bundler (tree shaking)...
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.featured-case-study__circle-vertical', {
      y: '0%',
      scrollTrigger: {
        trigger: '.featured-case-study__circle-vertical',
        scrub: true,
        start: 'top 100%',
        end: 'top 0%',
      },
    });

    gsap.to('.featured-case-study__circle-horizontal', {
      y: '0%',
      scrollTrigger: {
        trigger: '.featured-case-study__circle-horizontal',
        scrub: true,
        start: 'top 100%',
        end: 'top 0%',
      },
    });

    window.addEventListener('load', () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // if the user has set reduced motion on their device
        // turn off the graphic scroll
        ScrollTrigger.disable();
      } else {
        ScrollTrigger.enable();
      }
    });
  },
};
