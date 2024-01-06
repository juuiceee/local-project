import { classNames } from 'shared/lib/class-names/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { PropsWithChildren, memo } from 'react';
import styles from './appLink.module.scss';

export enum EAppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type TAppLinkProps = PropsWithChildren<{
  theme?: EAppLinkTheme;
  className?: string;
}> &
  LinkProps;

export const AppLink = memo((props: TAppLinkProps) => {
  const {
    to,
    theme = EAppLinkTheme.PRIMARY,
    className,
    children,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(styles.appLink, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
