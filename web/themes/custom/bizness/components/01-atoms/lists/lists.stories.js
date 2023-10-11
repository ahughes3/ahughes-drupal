// Twig templates
import ul from './ul.twig';
import ol from './ol.twig';

// Data files
import ulData from './ul.yml';
import olData from './ol.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Lists' };

export const unorderedList = () => ul(ulData);

export const orderedList = () => ol(olData);
