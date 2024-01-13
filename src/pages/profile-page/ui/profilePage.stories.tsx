import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/themeDecorator';
import AvatarPng from 'shared/assets/tests/avatar.jpg';
import { ETheme } from 'app/providers/theme-provider';
import { StoreDecorator } from 'shared/config/storybook/store-decorator/storeDecorator';
import ProfilePage from './profilePage';
import { ECountry } from '../../../entities/country';
import { ECurrency } from '../../../entities/currency';

export default {
  title: 'page/ProfilePage',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 21,
        city: 'Moscow',
        country: ECountry.RU,
        currency: ECurrency.RUB,
        name: 'Ivan',
        surname: 'Ivanov',
        avatar: AvatarPng,
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(ETheme.DARK),
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 21,
        city: 'Moscow',
        country: ECountry.RU,
        currency: ECurrency.RUB,
        name: 'Ivan',
        surname: 'Ivanov',
        avatar: AvatarPng,
      },
    },
  }),
];
