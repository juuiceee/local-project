import { classNames } from 'shared/lib/class-names/class-names';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './button.module.scss';

export enum EButtonTheme {
  CLEAR = 'clear',
  SECONDARY = 'secondary',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: EButtonTheme;
}

export const Button: FC<IButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      type="button"
      className={classNames(styles.button, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
