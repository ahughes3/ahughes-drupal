// Twig templates
import resultsTeaserListTwig from './results-teaser-list.twig';

// Data files
import resultsTeaserListData from './results-teaser-list.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Results Teaser List' };

export const resultsTeaserList = () =>
  resultsTeaserListTwig(resultsTeaserListData);
