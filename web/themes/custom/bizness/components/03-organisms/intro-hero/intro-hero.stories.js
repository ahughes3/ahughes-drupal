// Twig templates
import primaryHeroTwig from './primary/intro-hero-primary.twig';
import secondaryHeroTwig from './secondary/intro-hero-secondary.twig';
import tertiaryHeroTwig from './tertiary/intro-hero-tertiary.twig';

// Data files
import primaryHeroData from './primary/intro-hero-primary.yml';
import secondaryHeroData from './secondary/intro-hero-secondary.yml';
import tertiaryHeroData from './tertiary/intro-hero-tertiary.yml';

import './intro-hero';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Intro Hero' };

export const primary = () => primaryHeroTwig(primaryHeroData);

export const secondary = () => secondaryHeroTwig(secondaryHeroData);

export const tertiary = () => tertiaryHeroTwig(tertiaryHeroData);
