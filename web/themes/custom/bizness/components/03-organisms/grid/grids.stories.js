import grid from './grid.twig';

import gridData from './grid.yml';
import grid3ColData from './grid-3col.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Grids' };

export const defaultGrid = () => grid(gridData);

export const threeColGrid = () => grid(grid3ColData);
