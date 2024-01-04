import { classNames } from 'shared/lib/class-names/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import styles from './appLink.module.scss';

export enum EAppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type TAppLinkProps = {
  theme?: EAppLinkTheme;
  className?: string;
} & LinkProps;

export const AppLink: FC<TAppLinkProps> = (props) => {
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
};
