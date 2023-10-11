import documentationTwig from './documentation.twig';
import documentationData from './documentation.yml';

import './documentation';

/**
 * Storybook Definition.
 */
export default {
  title: 'Base/Documentation',
};

export const documentation = () => documentationTwig(documentationData);
