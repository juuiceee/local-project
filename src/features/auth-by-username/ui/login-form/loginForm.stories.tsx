import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/store-decorator/storeDecorator';
import LoginForm from './loginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({ login: { username: 'user', password: '234' } }),
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
  StoreDecorator({
    login: { username: 'user', password: '234', error: 'Error' },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator({
    login: { username: 'user', password: '234', isLoading: true },
  }),
];
