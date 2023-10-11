import imagesTwig from './image-list.twig';

import imagesData from './image-list.yml';
import imagesHalfAndHalfData from './image-list-half-and-half.yml';
import images2Thirds1ThirdData from './image-list-2thirds-1third.yml';
import imagesCollageData from './image-list-collage.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Image List' };

export const imagesFullWidth = () => imagesTwig(imagesData);
export const imagesHalfAndHalf = () => imagesTwig(imagesHalfAndHalfData);
export const images2Thirds1Third = () => imagesTwig(images2Thirds1ThirdData);
export const imagesCollage = () => imagesTwig(imagesCollageData);
