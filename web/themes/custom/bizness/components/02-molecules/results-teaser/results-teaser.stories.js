// Twig templates
import resultsTeaserTwig from './results-teaser.twig';

// Data files
import resultsTeaserData from './results-teaser.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Results Teaser' };

export const resultsTeaser = () => resultsTeaserTwig(resultsTeaserData);
