import { TMods, classNames } from 'shared/lib/class-names/classNames';
import { memo } from 'react';
import styles from './text.module.scss';

export enum ETextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum ETextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

type TTextProps = {
  className?: string;
  title?: string;
  text?: string;
  theme?: ETextTheme;
  align?: ETextAlign;
};

export const Text = memo((props: TTextProps) => {
  const {
    className,
    text,
    title,
    theme = ETextTheme.PRIMARY,
    align = ETextAlign.LEFT,
  } = props;

  const mods: TMods = {
    [styles[theme]]: true,
    [styles[align]]: true,
  };

  return (
    <div className={classNames(styles.text, [className], mods)}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
