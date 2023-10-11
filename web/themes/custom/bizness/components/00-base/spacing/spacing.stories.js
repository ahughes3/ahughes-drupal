import spacingTwig from './spacing.twig';
import spacingData from './spacing.yml';

import '../clipboard';

export default {
  title: 'Base/Spacing',
};

export const Spacing = () => spacingTwig(spacingData);
