import { routePath } from 'shared/config/route/config';
import { classNames } from 'shared/lib/helpers/class-names/class-names';
import styles from './navbar.module.scss';
import { AppLink, EAppLinkTheme } from 'shared/ui/app-link/app-link';

interface INavbarProps {
  className?: string;
}
export const Navbar = ({ className }: INavbarProps) => {
  return (
    <div className={classNames(styles.navbar, [className])}>
      <div className={styles.links}>
        <AppLink
          theme={EAppLinkTheme.SECONDARY}
          to={routePath.main}
          className={styles.mainLink}
        >
          Главная
        </AppLink>
        <AppLink
          theme={EAppLinkTheme.SECONDARY}
          to={routePath.about}
          className={styles.aboutLink}
        >
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
