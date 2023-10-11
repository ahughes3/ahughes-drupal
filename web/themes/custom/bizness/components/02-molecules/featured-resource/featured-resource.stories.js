// Twig templates
import featuredResourcePrimary from './primary/featured-resource-primary.twig';
import featuredResourceSecondary from './secondary/featured-resource-secondary.twig';
import featuredResourceTertiary from './tertiary/featured-resource-tertiary.twig';

// Data files
import featuredResourcePrimaryData from './primary/featured-resource-primary.yml';
import featuredResourceSecondaryData from './secondary/featured-resource-secondary.yml';
import featuredResourceTertiaryData from './tertiary/featured-resource-tertiary.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Featured Resource' };

export const Primary = () =>
  featuredResourcePrimary(featuredResourcePrimaryData);

// Loop over items in headingData to show each one in the example below.
const secondaryResources = featuredResourceSecondaryData
  .map((d) => featuredResourceSecondary(d))
  .join('');

export const Secondary = () => secondaryResources;

export const Tertiary = () =>
  featuredResourceTertiary(featuredResourceTertiaryData);
