import pattern from './pattern.twig';

import patternDots from './pattern-dots.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Pattern' };

export const dots = () => pattern(patternDots);
