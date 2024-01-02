import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/themeDecorator';
import { ETheme } from 'app/providers/theme-provider';
import { ThemeSwitcher } from './themeSwitcher';

export default {
  title: 'widget/ThemeSwitcher',
  component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <ThemeSwitcher {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ETheme.DARK)];
