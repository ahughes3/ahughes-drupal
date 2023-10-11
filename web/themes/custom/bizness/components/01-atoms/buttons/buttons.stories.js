// Twig templates
import button from './button.twig';

// Data files
import buttonData from './button.yml';
import buttonDarkData from './button-dark.yml';
import buttonSecondaryData from './button-secondary.yml';
import buttonSecondaryDarkData from './button-secondary-dark.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Button' };

export const primary = () => button(buttonData);

export const primaryDark = () => button(buttonDarkData);

export const secondary = () => button(buttonSecondaryData);

export const secondaryDark = () => button(buttonSecondaryDarkData);
