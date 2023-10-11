/* Templates */
import transcriptTwig from './transcript.twig';

/* Data */
import transcriptData from './transcript.yml';

import './transcript';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Transcript' };

export const transcript = () => transcriptTwig(transcriptData);
