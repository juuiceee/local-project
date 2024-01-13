import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarPng from 'shared/assets/tests/avatar.jpg';
import { ECountry } from '../../../../entities/country';
import { ECurrency } from '../../../../entities/currency';
import { ProfileCard } from './profileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    age: 21,
    city: 'Moscow',
    country: ECountry.RU,
    currency: ECurrency.RUB,
    name: 'Ivan',
    surname: 'Ivanov',
    avatar: AvatarPng,
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Some error',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
