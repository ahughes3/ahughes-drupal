import image from './image/image.twig';
import iconTwig from './icons/icons.twig';
import texturesTwig from './image/_textures.twig';

import imageData from './image/image.yml';
import figureData from './image/figure.yml';
import texturesData from './image/textures.yml';

const svgIcons = require.context('../../../images/icons/', true, /\.svg$/);
const icons = [];
svgIcons.keys().forEach((key) => {
  const icon = key.split('./')[1].split('.')[0];
  icons.push(icon);
});

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Images' };

export const images = () => `
  <div class="image-examples">
    <div class="image-example">
    <h2>957 x 656</h2>
    ${image(imageData.images.big)}
    </div>
    <div class="image-example">
    <h2>885 x 528</h2>
    ${image(imageData.images.medium)}
    </div>
    <div class="image-example">
    <h2>300 x 300</h2>
    ${image(imageData.images.square)}
    </div>
    <div class="image-example">
    <h2>332 x 312</h2>
    ${image(imageData.images.small)}
    </div>
  </div>
`;

export const figures = () => `
  <div class="image-examples">
    <div class="image-example">
    <h2>957 x 656</h2>
    ${image(figureData.images.big)}
    </div>
    <div class="image-example">
    <h2>885 x 528</h2>
    ${image(figureData.images.medium)}
    </div>
    <div class="image-example">
    <h2>300 x 300</h2>
    ${image(figureData.images.square)}
    </div>
    <div class="image-example">
    <h2>332 x 312</h2>
    ${image(figureData.images.small)}
    </div>
  </div>
`;

export const Icons = () => iconTwig({ icons });

export const textures = () => texturesTwig(texturesData);
