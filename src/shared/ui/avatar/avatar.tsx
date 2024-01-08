import { TMods, classNames } from 'shared/lib/class-names/classNames';
import { CSSProperties, memo, useMemo } from 'react';
import styles from './avatar.module.scss';

type TAvatarProps = {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
};

export const Avatar = memo(({ className, src, alt, size }: TAvatarProps) => {
  const mods: TMods = {};

  const style = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size],
  );

  return (
    <img
      src={src}
      alt={alt}
      className={classNames(styles.avatar, [className], mods)}
      style={style}
    />
  );
});
