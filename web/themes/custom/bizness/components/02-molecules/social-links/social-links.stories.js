// Twig templates
import socialLinksTwig from './_social-links.twig';

// Data files
import socialLinksData from './social-links.yml';
import socialLinksBioData from './social-links-bio.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Social Links' };

export const socialLinks = () => socialLinksTwig(socialLinksData);
export const socialLinksBio = () => socialLinksTwig(socialLinksBioData);
