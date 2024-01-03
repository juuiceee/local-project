import { Story } from '@storybook/react';
import { ETheme, ThemeProvider } from 'app/providers/theme-provider';

export const ThemeDecorator = (theme: ETheme) => (StoryComponent: Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
