import audioTwig from './audio.twig';
import audioData from './audio.yml';
import './audio';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Audio' };

export const audio = () => audioTwig(audioData);
