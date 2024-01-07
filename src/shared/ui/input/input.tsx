import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib/class-names/classNames';
import styles from './input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

type TInputProps = {
  className?: string;
  value?: string;
  placeholder?: string;
  autoFocus?: boolean;
  onChange?: (value: string) => void;
} & HTMLInputProps;

export const Input = memo((props: TInputProps) => {
  const {
    className,
    value,
    placeholder,
    type = 'text',
    autoFocus,
    onChange,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);

      if (ref.current) {
        ref.current.focus();
      }
    }
  }, [autoFocus]);

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const handleOnSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setCaretPosition(e.target.selectionStart || 0);
  };

  return (
    <div className={classNames(styles.inputWrapper, [className])}>
      {placeholder && (
        <div className={styles.placeholder}>{`${placeholder} >`}</div>
      )}
      <div className={styles.caretWrapper}>
        <input
          ref={ref}
          className={styles.input}
          type={type}
          value={value}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onSelect={handleOnSelect}
          {...otherProps}
        />
        {isFocused && (
          <span
            className={styles.caret}
            style={{ left: `${caretPosition * 7.4}px` }}
          />
        )}
      </div>
    </div>
  );
});
