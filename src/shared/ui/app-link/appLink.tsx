import { classNames } from 'shared/lib/class-names/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import styles from './appLink.module.scss';

export enum EAppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
  theme?: EAppLinkTheme;
  className?: string;
}

export const AppLink: FC<IAppLinkProps> = (props) => {
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