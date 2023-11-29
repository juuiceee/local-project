import { routePath } from 'shared/config/route/config';
import { classNames } from 'shared/lib/class-names/class-names';
import { AppLink, EAppLinkTheme } from 'shared/ui/app-link/app-link';
import { useTranslation } from 'react-i18next';
import styles from './navbar.module.scss';

interface INavbarProps {
  className?: string;
}
export const Navbar = ({ className }: INavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.navbar, [className])}>
      <div className={styles.links}>
        <AppLink
          theme={EAppLinkTheme.SECONDARY}
          to={routePath.main}
          className={styles.mainLink}
        >
          {t('main_link')}
        </AppLink>
        <AppLink
          theme={EAppLinkTheme.SECONDARY}
          to={routePath.about}
          className={styles.aboutLink}
        >
          {t('about_link')}
        </AppLink>
      </div>
    </div>
  );
};
