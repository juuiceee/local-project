import { render, screen } from '@testing-library/react';
import { Button, EButtonTheme } from './button';

describe('button', () => {
  test('button render', () => {
    render(<Button>TEST</Button>);

    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('button clear theme', () => {
    render(<Button theme={EButtonTheme.CLEAR}>TEST</Button>);

    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
