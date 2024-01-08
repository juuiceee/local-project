import { TMods, classNames } from 'shared/lib/class-names/classNames';
import { ChangeEvent, memo } from 'react';
import styles from './select.module.scss';

export type TSelectOption = {
  value: string;
  content: string;
};

type TSelectProps = {
  className?: string;
  label?: string;
  options?: Array<TSelectOption>;
  value?: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
};

export const Select = memo(
  ({ className, label, options, value, readOnly, onChange }: TSelectProps) => {
    const mods: TMods = {
      [styles.readOnly]: readOnly,
    };

    const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(event.target.value);
    };

    return (
      <div className={classNames(styles.wrapper, [className], mods)}>
        {Boolean(label) && <span className={styles.label}>{`${label} >`}</span>}
        <select
          className={styles.select}
          value={value}
          onChange={handleOnChange}
          disabled={readOnly}
        >
          {options?.map((option) => (
            <option
              key={option.value}
              className={styles.option}
              value={option.value}
            >
              {option.content}
            </option>
          ))}
        </select>
      </div>
    );
  },
);
