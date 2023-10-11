import letsTalkTwig from './lets-talk.twig';

import letsTalkData from './lets-talk.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Let’s talk' };

export const letsTalk = () => letsTalkTwig(letsTalkData);
