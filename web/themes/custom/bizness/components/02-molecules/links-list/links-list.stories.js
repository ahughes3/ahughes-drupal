/* Templates */
import linkListPrimaryTwig from './primary/link-list-primary.twig';
import linkListSecondaryTwig from './secondary/link-list-secondary.twig';

/* Data */
import linkListPrimaryData from './primary/link-list-primary.yml';
import linkListSecondaryData from './secondary/link-list-secondary.yml';
import linkListSecondaryBlackData from './secondary/link-list-secondary-black.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Links list' };

export const linkListPrimary = () => linkListPrimaryTwig(linkListPrimaryData);

export const linkListSecondary = () =>
  linkListSecondaryTwig(linkListSecondaryData);

export const linkListSecondaryDark = () =>
  linkListSecondaryTwig(linkListSecondaryBlackData);
