import { classNames } from 'shared/lib/class-names/classNames';
import { memo, useState } from 'react';
import { Button, EButtonSize, EButtonTheme } from 'shared/ui/button/button';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LanguageSwitcher } from 'widgets/language-switcher';
import { sidebarItems } from '../../model/items';
import styles from './sidebar.module.scss';
import { SidebarItem } from '../sidebarItem/sidebarItem';

type TSidebarProps = {
  className?: string;
};

export const Sidebar = memo(({ className }: TSidebarProps) => {
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
        {sidebarItems.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={styles.lngSwitcher} short={collapsed} />
      </div>
    </div>
  );
});
