import { classNames } from 'shared/lib/helpers/class-names/class-names';
import { useState } from 'react';
import { Button } from 'shared/ui/button/button';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LanguageSwitcher } from 'widgets/language-switcher';
import { useTranslation } from 'react-i18next';
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
      className={classNames(styles.sidebar, [className], {
        [styles.collapsed]: collapsed,
      })}
    >
      <Button onClick={onToggle}>{t('toggle')}</Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={styles.lngSwitcher} />
      </div>
    </div>
  );
};
