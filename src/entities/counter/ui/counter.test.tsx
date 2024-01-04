import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { componentRender } from 'shared/lib/tests/component-render/componentRender';
import { Counter } from './counter';

describe('counter', () => {
  test('initial counter value is 0', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 0 } } });
    const counterValue = screen.getByTestId('value');
    expect(counterValue).toHaveTextContent('0');
  });

  test('increment', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 0 } } });
    const incrementButton = screen.getByTestId('increment');
    const counterValue = screen.getByTestId('value');

    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('1');

    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('2');
  });

  test('decrement', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 0 } } });
    const decrementButton = screen.getByTestId('decrement');
    const counterValue = screen.getByTestId('value');

    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('-1');

    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('-2');
  });
});
