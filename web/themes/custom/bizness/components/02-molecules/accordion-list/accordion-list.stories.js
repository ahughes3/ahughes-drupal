// Twig templates
import accordionListTwig from './accordion-list.twig';

// Data files
import accordionListData from './accordion-list.yml';

import './accordion-list';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Accordion List' };

export const accordionList = () => accordionListTwig(accordionListData);
