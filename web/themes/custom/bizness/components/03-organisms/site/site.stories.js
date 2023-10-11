import footerTwig from './site-footer/site-footer.twig';
import siteHeader from './site-header/site-header.twig';

import footerContact from '../../02-molecules/lets-talk/lets-talk.yml';
import footerSocial from '../../02-molecules/menus/social/social-menu.yml';
import mainMenuData from '../../02-molecules/menus/main-menu/main-menu.yml';
import footerMenu from '../../02-molecules/menus/footer-menu/footer-menu.yml';
import breadcrumbData from '../../02-molecules/menus/breadcrumbs/breadcrumbs.yml';

import '../../02-molecules/menus/main-menu/main-menu';
import './site-header/header-helper';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Site' };

const footerNewsletter = {
  card__title: 'bizness Newsletter',
  card__body:
    'Stay connected with our latest news, articles, webinars, and more via our newsletter.',
  card__cta: {
    title: 'Sign up',
    url: '#',
  },
};

export const footer = () =>
  footerTwig({
    ...footerMenu,
    ...footerSocial,
    ...footerContact,
    ...footerNewsletter,
  });

export const header = () =>
  siteHeader({
    ...mainMenuData,
    ...breadcrumbData,
  });
