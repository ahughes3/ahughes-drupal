import fullWidthTwig from './full-width.twig';
import withSidebarTwig from './with-sidebar.twig';

import mainMenu from '../02-molecules/menus/main-menu/main-menu.yml';
import footerSocial from '../02-molecules/menus/social/social-menu.yml';
import footerMenu from '../02-molecules/menus/footer-menu/footer-menu.yml';
import footerContact from '../02-molecules/lets-talk/lets-talk.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Templates/Layouts',
  parameters: {
    layout: 'fullscreen',
  },
};

const footerNewsletter = {
  card__title: 'bizness Newsletter',
  card__body:
    'Stay connected with our latest news, articles, webinars, and more via our newsletter.',
  card__cta: {
    title: 'Sign up',
    url: '#',
  },
};

export const fullWidth = () =>
  fullWidthTwig({
    ...mainMenu,
    ...footerMenu,
    ...footerSocial,
    ...footerContact,
    ...footerNewsletter,
  });

export const withSidebar = () =>
  withSidebarTwig({
    ...mainMenu,
    ...footerMenu,
    ...footerSocial,
    ...footerContact,
    ...footerNewsletter,
  });
