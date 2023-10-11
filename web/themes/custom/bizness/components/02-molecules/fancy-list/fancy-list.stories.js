/* Templates */
import fancyListTwig from './fancy-list.twig';

/* Data */
import fancyListData from './fancy-list.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Fancy list' };

export const fancyList = () => fancyListTwig(fancyListData);
