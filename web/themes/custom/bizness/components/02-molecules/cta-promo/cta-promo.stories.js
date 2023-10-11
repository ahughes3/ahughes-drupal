// Template
import ctaPromoTwig from './cta-promo.twig';

// Data
import ctaPromoData from './cta-promo.yml';
import ctaPromoCardData from './cta-promo-card.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/CTA Promo' };

// Loop over items in ctaPromoData to show each one in the example below.
const ctaPromoContent = ctaPromoData.map((d) => ctaPromoTwig(d)).join('');
export const defaultStyle = () => ctaPromoContent;

const ctaPromoCardContent = ctaPromoCardData
  .map((d) => ctaPromoTwig(d))
  .join('');

export const cardStyle = () => ctaPromoCardContent;
