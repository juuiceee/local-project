import { classNames } from 'shared/lib/helpers/class-names/class-names';
import styles from './button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

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
      className={classNames(styles.button, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
