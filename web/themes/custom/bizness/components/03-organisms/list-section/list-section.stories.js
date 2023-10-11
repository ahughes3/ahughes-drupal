// Twig templates
import listSectionTwig from './list-section.twig';

// Data files
import listSectionData from './list-section.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/List Section' };

export const listSection = () => listSectionTwig(listSectionData);
