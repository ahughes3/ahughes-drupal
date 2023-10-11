// Twig templates
import bioSquareListTwig from './bio-square-list.twig';

// Data files
import bioSquareListData from './bio-square-list.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Bio Square List' };

export const bioSquareList = () => bioSquareListTwig(bioSquareListData);
