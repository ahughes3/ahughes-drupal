// Twig templates
import primaryTwig from './primary/featured-case-study-primary.twig';
import secondaryTwig from './secondary/featured-case-study-secondary.twig';
import secondaryListTwig from './secondary-list/featured-case-study-secondary-list.twig';

// Data files
import primaryData from './primary/featured-case-study-primary.yml';
import secondaryData from './secondary/featured-case-study-secondary.yml';
import secondaryListData from './secondary-list/featured-case-study-secondary-list.yml';

import './featured-case-study';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Featured Case Study' };

// Loop over items in primaryData to show each one in the example below.
const primaryContent = primaryData.map((d) => primaryTwig(d)).join('');
export const primary = () => primaryContent;

// Loop over items in secondaryData to show each one in the example below.
const secondaryContent = secondaryData.map((d) => secondaryTwig(d)).join('');
export const secondary = () => secondaryContent;

export const secondaryList = () => secondaryListTwig(secondaryListData);
