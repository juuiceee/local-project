import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/themeDecorator';
import { ETheme } from 'app/providers/theme-provider';
import { Sidebar } from './sidebar';

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(ETheme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ETheme.DARK)];
