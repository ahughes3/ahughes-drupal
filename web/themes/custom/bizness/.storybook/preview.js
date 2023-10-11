import { addDecorator } from '@storybook/html';
import { useEffect } from '@storybook/client-api';
import Twig from 'twig';
import { setupTwig } from './setupTwig';

// GLOBAL CSS
import '../components/style.scss';

// If in a Drupal project, it's recommended to import a symlinked version of drupal.js.
import './_drupal.js';

// addDecorator deprecated, but not sure how to use this otherwise.
addDecorator((storyFn) => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return storyFn();
});

setupTwig(Twig);
const customViewports = {
  xs: {
    name: 'XS',
    styles: {
      width: '320px',
      height: '660px',
    },
  },
  small: {
    name: 'Small',
    styles: {
      width: '480px',
      height: '780px',
    },
  },
  medium: {
    name: 'Medium',
    styles: {
      width: '768px',
      height: '960px',
    },
  },
  large: {
    name: 'Large',
    styles: {
      width: '960px',
      height: '720px',
    },
  },
  xl: {
    name: 'XL',
    styles: {
      width: '1280px',
      height: '720px',
    },
  },
  xxl: {
    name: 'XXL',
    styles: {
      width: '1400px',
      height: '1024',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: { viewports: customViewports },
};
