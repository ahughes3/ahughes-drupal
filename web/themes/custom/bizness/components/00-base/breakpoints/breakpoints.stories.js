import breakpointsTwig from './breakpoints.twig';
import breakpointsData from './breakpoints.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Base/Breakpoints',
};

export const breakpoints = () => breakpointsTwig(breakpointsData);
