// Twig templates
import link from './link.twig';

// Data files
import linkData from './link.yml';
import linkDarkData from './link-dark.yml';
import inlineLinkData from './inline-link.yml';
import inlineLinkDarkData from './inline-link-dark.yml';
import jumpLinkData from './jump-link.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Links' };

export const links = () => link(linkData);

export const linkDark = () => link(linkDarkData);

export const inlineLinks = () => link(inlineLinkData);

export const inlineLinksDark = () => link(inlineLinkDarkData);

export const sidebarJumpLinks = () => link(jumpLinkData);
