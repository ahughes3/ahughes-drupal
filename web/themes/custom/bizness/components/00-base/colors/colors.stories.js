// Twig templates
import palettes from './palettes/palettes.twig';
import gradients from './gradients/gradients.twig';

// Data files
import palettesData from './palettes/palettes.yml';
import gradientsData from './gradients/gradients.yml';

import './gradients/gradients';
import './palettes/palettes';
import '../clipboard';

/**
 * Storybook Definition.
 */
export default { title: 'Base/Colors' };

export const Palettes = () => palettes(palettesData);

export const Gradients = () => gradients(gradientsData);
