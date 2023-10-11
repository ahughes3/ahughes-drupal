import pagerTwig from './pager.twig';
import pagerData from './pager.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menu/Pager' };

export const pager = () => pagerTwig(pagerData);
