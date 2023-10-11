import tagsWithLabelTwig from './tags-with-label.twig';

import tagsWithLabelData from './tags-with-label.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Tags With Label' };

export const tagsWithLabel = () => tagsWithLabelTwig(tagsWithLabelData);
