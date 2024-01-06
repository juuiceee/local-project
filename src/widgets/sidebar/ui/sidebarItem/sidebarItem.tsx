import { AppLink, EAppLinkTheme } from 'shared/ui/app-link/appLink';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/classNames';
import { memo } from 'react';
import { TSidebarItem } from '../../model/items';
import styles from './sidebarItem.module.scss';

type TSidebarItemProps = {
  item: TSidebarItem;
  collapsed: boolean;
};

export const SidebarItem = memo(({ item, collapsed }: TSidebarItemProps) => {
  const { t } = useTranslation();
  return (
    <AppLink
      theme={EAppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(styles.sidebarItem, [], {
        [styles.collapsed]: collapsed,
      })}
    >
      <item.Icon className={styles.icon} />
      <span className={styles.link}>{t(item.text)}</span>
    </AppLink>
  );
});
