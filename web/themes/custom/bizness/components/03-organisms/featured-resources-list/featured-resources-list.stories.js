// Twig Templates
import secondaryFeaturedResourcesListTwig from './secondary/featured-resources-list-secondary.twig';
import tertiaryFeaturedResourcesListTwig from './tertiary/featured-resources-list-tertiary.twig';

// Data Files
import secondaryFeaturedResourcesListData from './secondary/featured-resources-list-secondary.yml';
import tertiaryFeaturedResourcesListData from './tertiary/featured-resources-list-tertiary.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Featured Resources List' };

export const secondaryFeaturedResourcesList = () =>
  secondaryFeaturedResourcesListTwig(secondaryFeaturedResourcesListData);

export const tertiaryFeaturedResourcesList = () =>
  tertiaryFeaturedResourcesListTwig(tertiaryFeaturedResourcesListData);
