// Twig templates
import guestListTwig from './guest-list.twig';

// Data files
import guestListData from './guest-list.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Guest List' };

export const guestList = () => guestListTwig(guestListData);
