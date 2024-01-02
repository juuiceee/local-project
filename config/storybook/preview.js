import { addDecorator } from '@storybook/react';
import { ETheme } from '../../src/app/providers/theme-provider/index';
import { StyleDecorator } from '../../src/shared/config/storybook/style-decorator/styleDecorator';
import { RouteDecorator } from '../../src/shared/config/storybook/route-decorator/routeDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/theme-decorator/themeDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(ETheme.LIGHT));
addDecorator(RouteDecorator);
