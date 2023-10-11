// Twig templates
import guestTwig from './guest.twig';

// Data files
import guestData from './guest.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Guest' };

export const guest = () => guestTwig(guestData);
