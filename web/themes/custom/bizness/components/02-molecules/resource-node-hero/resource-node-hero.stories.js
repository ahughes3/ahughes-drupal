// Twig templates
import ResourceNodeHeroTwig from './resource-node-hero.twig';

// Data files
import ResourceNodeHeroData from './resource-node-hero.yml';
import ResourceNodeHeroPodcastData from './resource-node-hero-podcast.yml';
import ResourceNodeHeroPodcastEpisodeData from './resource-node-hero-podcast-episode.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Resource Node Hero',
};

// Loop over items in ResourceNodeHeroData to show each one in the example below.
const resourceContent = ResourceNodeHeroData.map((d) =>
  ResourceNodeHeroTwig(d),
).join('');
export const ResourceNodeHero = () => resourceContent;

export const ResourceNodeHeroPodcast = () =>
  ResourceNodeHeroTwig(ResourceNodeHeroPodcastData);

export const ResourceNodeHeroPodcastEpisode = () =>
  ResourceNodeHeroTwig(ResourceNodeHeroPodcastEpisodeData);
