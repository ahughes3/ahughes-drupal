import verticalListTwig from './vertical-list.twig';

import verticalListData from './vertical-list.yml';
import verticalListWhiteData from './vertical-list-white.yml';
import verticalListGrayData from './vertical-list-gray.yml';

import verticalListTextData from './vertical-list-text.yml';
import verticalListLinkData from './vertical-list-link.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Vertical List' };

export const verticalList = () => verticalListTwig(verticalListData);

export const verticalListWhite = () =>
  verticalListTwig({ ...verticalListData, ...verticalListWhiteData });

export const verticalListGray = () =>
  verticalListTwig({ ...verticalListData, ...verticalListGrayData });

export const verticalListText = () => verticalListTwig(verticalListTextData);

export const verticalListLink = () => verticalListTwig(verticalListLinkData);
