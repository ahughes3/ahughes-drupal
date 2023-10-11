// Twig templates
import heroArticleTwig from './hero-article.twig';

// Data files
import heroArticleData from './hero-article.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Hero Article' };

export const heroArticle = () => heroArticleTwig(heroArticleData);
