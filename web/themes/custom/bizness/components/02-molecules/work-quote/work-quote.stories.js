// Twig templates
import workQuoteTwig from './work-quote.twig';

// Data files
import workQuoteData from './work-quote.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Work Quote' };

export const workQuote = () => workQuoteTwig(workQuoteData);
