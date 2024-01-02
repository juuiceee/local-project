import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/themeDecorator';
import { ETheme } from 'app/providers/theme-provider';
import { Button, EButtonTheme } from './button';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: EButtonTheme.CLEAR,
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Text',
  theme: EButtonTheme.OUTLINE,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: 'Text',
  theme: EButtonTheme.OUTLINE,
};
OutlinedDark.decorators = [ThemeDecorator(ETheme.DARK)];
