import { TMods, classNames } from 'shared/lib/class-names/classNames';
import { ButtonHTMLAttributes, PropsWithChildren, memo } from 'react';
import styles from './button.module.scss';

export enum EButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
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

type TButtonProps = PropsWithChildren<{
  className?: string;
  theme?: EButtonTheme;
  square?: boolean;
  size?: EButtonSize;
  disabled?: boolean;
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = memo((props: TButtonProps) => {
  const {
    className,
    children,
    theme = EButtonTheme.OUTLINE,
    square,
    size = EButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods: TMods = {
    [styles[theme]]: true,
    [styles.square]: square,
    [styles[size]]: true,
    [styles.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(styles.button, [className], mods)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
