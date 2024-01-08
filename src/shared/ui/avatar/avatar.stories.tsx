import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './avatar';
import AvatarPng from './avatar.jpg';

export default {
  title: 'widget/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: AvatarPng,
  alt: 'avatar',
};
