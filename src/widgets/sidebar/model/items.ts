import React from 'react';
import i18n from 'shared/config/i18n/i18n';
import { routePath } from 'shared/config/route/config';
import AboutIcon from 'shared/assets/aboutIcon.svg';
import HomeIcon from 'shared/assets/homeIcon.svg';
import ProfileIcon from 'shared/assets/profileIcon.svg';

export type TSidebarItem = {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGElement>>;
};

export const sidebarItems: TSidebarItem[] = [
  {
    path: routePath.main,
    text: 'main_link',
    Icon: HomeIcon,
  },
  {
    path: routePath.about,
    text: 'about_link',
    Icon: AboutIcon,
  },
  {
    path: routePath.profile,
    text: 'profile_link',
    Icon: ProfileIcon,
  },
];