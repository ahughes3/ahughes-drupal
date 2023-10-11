// Twig templates
import linkListTwig from './link-list.twig';
import fancyListTwig from './fancy-list.twig';
import accordionListTwig from './accordion-list.twig';

// Data files
import baseData from '../list-section.yml';
import fancyListData from '../../../02-molecules/fancy-list/fancy-list.yml';
import accordionListData from '../../../02-molecules/accordion-list/accordion-list.yml';

const linkListData = Array(12).fill({
  link_url: '#',
  link_content: 'Link title displays here',
  link_description:
    'Optional link description displays here like this and is limited to 140 characters a dui vel justo fringilla euismod enim. Nunc non semper.',
});

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/List Section/Examples',
  argTypes: {
    headingSize: {
      control: {
        type: 'select',
        options: ['heading', 'label'],
      },
      defaultValue: 'heading',
    },
    showHeader: {
      control: 'boolean',
      defaultValue: 'true',
    },
    background: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
      defaultValue: 'light',
    },
    columnCount: {
      control: {
        type: 'select',
        options: ['onecol', 'twocol', 'threecol'],
      },
      defaultValue: 'onecol',
    },
  },
};

export const accordionList = (config) =>
  accordionListTwig({
    ...baseData,
    ...accordionListData,
    list_section__has_heading: config.showHeader,
    list_section__heading_size: config.headingSize,
    list_section__modifiers: [config.background, config.columnCount],
  });

export const fancyList = (config) =>
  fancyListTwig({
    ...baseData,
    ...fancyListData,
    list_section__has_heading: config.showHeader,
    list_section__heading_size: config.headingSize,
    list_section__modifiers: [config.background, config.columnCount],
  });

export const linkList = (config) =>
  linkListTwig({
    ...baseData,
    link_list_primary__items: linkListData,
    list_section__has_heading: config.showHeader,
    list_section__heading_size: config.headingSize,
    link_list_primary__heading: 'List Heading (optional)',
    list_section__modifiers: [config.background, config.columnCount],
  });
