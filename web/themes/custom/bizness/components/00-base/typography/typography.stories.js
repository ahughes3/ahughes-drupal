// Twig templates
import typeFaces from './type-faces/type-faces.twig';
import typeScale from './type-scale/type-scale.twig';

// Data files
import typeFacesData from './type-faces/type-faces.yml';
import scaleData from './type-scale/type-scale.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Base/Typography' };

export const TypeFaces = () => typeFaces(typeFacesData);

export const TypeScale = () => typeScale(scaleData);
