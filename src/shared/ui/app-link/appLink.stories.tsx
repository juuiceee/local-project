import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/themeDecorator';
import { ETheme } from 'app/providers/theme-provider';
import { AppLink, EAppLinkTheme } from './appLink';

export default {
  title: 'widget/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Link',
  theme: EAppLinkTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Link',
  theme: EAppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(ETheme.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Link',
  theme: EAppLinkTheme.SECONDARY,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Link',
  theme: EAppLinkTheme.PRIMARY,
};
SecondaryDark.decorators = [ThemeDecorator(ETheme.DARK)];
