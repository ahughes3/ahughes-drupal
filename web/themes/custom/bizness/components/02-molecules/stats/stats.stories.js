// Twig templates
import statsTwig from './stats.twig';
import statsListTwig from './stats-list.twig';

// Data files
import statsData from './stats.yml';
import statsListData from './stats-list.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Stats' };

export const statsExample = () => statsTwig(statsData);

export const statsListExample = () => statsListTwig(statsListData);
