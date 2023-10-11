// Twig templates
import PromoCardTwig from './promo-card.twig';

// Data files
import PromoCardData from './promo-card.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Promo Card' };

export const PromoCard = () => PromoCardTwig(PromoCardData);
