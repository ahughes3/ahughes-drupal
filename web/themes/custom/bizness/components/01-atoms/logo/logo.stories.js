// Twig templates
import logoTwig from './logo.twig';

// Data files
import logoData from './logo.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Logo' };

export const logo = () => logoTwig(logoData);
