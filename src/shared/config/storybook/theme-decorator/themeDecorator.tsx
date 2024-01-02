import { Story } from '@storybook/react';
import { ETheme } from 'app/providers/theme-provider';

export const ThemeDecorator = (theme: ETheme) => (StoryComponent: Story) =>
  (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
