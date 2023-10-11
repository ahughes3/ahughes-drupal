// Twig templates
import bioTwig from './bio.twig';
import expertiseTwig from './expertise/expertise.twig';
import headerTwig from './header/header.twig';
import squareTwig from './square/square.twig';

// Data files
import bioData from './bio.yml';
import expertiseData from './expertise/expertise.yml';
import headerData from './header/header.yml';
import squareData from './square/square.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Bio' };

export const bio = () => bioTwig(bioData);

export const expertise = () => `
  <div class="storybook-500-max-width-wrapper">
    ${expertiseTwig(expertiseData)}
  </div>
`;

export const header = () => headerTwig(headerData);

export const square = () => `
  <div style="max-width: 220px">
    ${squareTwig(squareData)}
  </div>
`;
