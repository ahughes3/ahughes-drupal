import captionTwig from './caption.twig';
import captionData from './caption.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Caption' };

export const caption = () => captionTwig(captionData);
