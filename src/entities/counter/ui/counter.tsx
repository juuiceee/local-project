import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/button/button';
import { counterActions } from '../model/slices/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue /getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <p data-testid="value">{counterValue}</p>
      <Button data-testid="increment" onClick={increment}>
        +
      </Button>
      <Button data-testid="decrement" onClick={decrement}>
        -
      </Button>
    </div>
  );
};
