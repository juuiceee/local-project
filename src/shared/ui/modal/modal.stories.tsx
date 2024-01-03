import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './modal';

export default {
  title: 'shared/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Hello world',
  isOpen: true,
};
