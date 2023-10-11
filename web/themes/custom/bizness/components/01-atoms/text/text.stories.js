// Twig templates
import code from './text/05-pre.twig';
import heading from './headings/_heading.twig';
import blockquote from './text/02-blockquote.twig';
import paragraph from './text/03-inline-elements.twig';

// Data files
import headingData from './headings/headings.yml';
import blockquoteData from './text/blockquote.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Text' };

// Loop over items in headingData to show each one in the example below.
const headings = headingData.map((d) => heading(d)).join('');

export const Quotes = () => blockquote(blockquoteData);

export const Headings = () => headings;

export const Paragraph = () => paragraph();

export const EmbeddedCode = () => code();
