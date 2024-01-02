import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/themeDecorator';
import { ETheme } from 'app/providers/theme-provider';
import { Navbar } from './navbar';

export default {
  title: 'widget/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(ETheme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ETheme.DARK)];
