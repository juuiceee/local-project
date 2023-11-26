import { useState } from 'react';
import styles from './index.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        className={styles.btn}
        onClick={() => setCount((prev) => (prev += 1))}
      >
        +
      </button>
      <p>{count}</p>
      <button
        className={styles.btn}
        onClick={() => setCount((prev) => (prev -= 1))}
      >
        -
      </button>
    </div>
  );
};
