import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './select';

export default {
  title: 'widget/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Currency',
  options: [
    { value: '1', content: 'USD' },
    { value: '2', content: 'RUB' },
  ],
};
