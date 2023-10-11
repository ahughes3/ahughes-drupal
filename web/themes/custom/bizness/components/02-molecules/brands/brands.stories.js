// Twig templates
import brandsTwig from './brands.twig';

// Data files
import brandsData from './brands.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Brands' };

export const brands = () => brandsTwig(brandsData);
