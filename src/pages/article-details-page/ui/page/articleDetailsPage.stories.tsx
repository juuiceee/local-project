import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/themeDecorator';
import { ETheme } from 'app/providers/theme-provider';
import ArticleDetailsPage from './articleDetailsPage';

export default {
  title: 'page/ArticleDetailsPage',
  component: ArticleDetailsPage,
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => (
  <ArticleDetailsPage />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(ETheme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ETheme.DARK)];
