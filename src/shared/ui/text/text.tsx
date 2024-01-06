import { classNames } from 'shared/lib/class-names/classNames';
import { memo } from 'react';
import styles from './text.module.scss';

export enum ETextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

type TTextProps = {
  className?: string;
  title?: string;
  text?: string;
  theme?: ETextTheme;
};

export const Text = memo((props: TTextProps) => {
  const { className, text, title, theme = ETextTheme.PRIMARY } = props;

  return (
    <div
      className={classNames(styles.text, [className], {
        [styles[theme]]: true,
      })}
    >
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
