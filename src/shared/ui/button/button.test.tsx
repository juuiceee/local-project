import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('button', () => {
  test('test render', () => {
    render(<Button>TEST</Button>);

    expect(screen.findByText('TEST')).toBeInTheDocument();
  });
});
