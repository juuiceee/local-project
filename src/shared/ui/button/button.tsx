import { classNames } from 'shared/lib/class-names/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './button.module.scss';

export enum EButtonTheme {
  CLEAR = 'clear',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum EButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: EButtonTheme;
  square?: boolean;
  size?: EButtonSize;
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size = EButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [styles[theme]]: true,
    [styles.square]: square,
    [styles[size]]: true,
  };

  return (
    <button
      type="button"
      className={classNames(styles.button, [className], mods)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
