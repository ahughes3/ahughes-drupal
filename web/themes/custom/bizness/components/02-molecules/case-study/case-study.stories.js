// Twig templates
import caseStudyTwig from './case-study.twig';
import caseStudyListTwig from './case-study-list.twig';

// Data files
import caseStudyData from './case-study.yml';
import caseStudyListData from './case-study-list.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Case Study' };

export const caseStudyExample = () => caseStudyTwig(caseStudyData);

export const caseStudyList = () => caseStudyListTwig(caseStudyListData);
