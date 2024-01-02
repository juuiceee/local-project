import { classNames } from 'shared/lib/class-names/classNames';
import { useState } from 'react';
import { Button, EButtonSize, EButtonTheme } from 'shared/ui/button/button';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LanguageSwitcher } from 'widgets/language-switcher';
import AboutIcon from 'shared/assets/aboutIcon.svg';
import HomeIcon from 'shared/assets/homeIcon.svg';
import { useTranslation } from 'react-i18next';
import { AppLink, EAppLinkTheme } from 'shared/ui/app-link/appLink';
import { routePath } from 'shared/config/route/config';
import styles from './sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sidebar, [className], {
        [styles.collapsed]: collapsed,
      })}
    >
      <Button
        data-testid="sidebar-toggle"
        className={styles.collapsedBtn}
        onClick={onToggle}
        theme={EButtonTheme.BACKGROUND_INVERTED}
        square
        size={EButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        <AppLink
          theme={EAppLinkTheme.SECONDARY}
          to={routePath.main}
          className={styles.item}
        >
          <HomeIcon className={styles.icon} />
          <span className={styles.link}>{t('main_link')}</span>
        </AppLink>
        <AppLink
          theme={EAppLinkTheme.SECONDARY}
          to={routePath.about}
          className={styles.item}
        >
          <AboutIcon className={styles.icon} />
          <span className={styles.link}>{t('about_link')}</span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={styles.lngSwitcher} short={collapsed} />
      </div>
    </div>
  );
};
