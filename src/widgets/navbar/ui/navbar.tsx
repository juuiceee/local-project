import { classNames } from 'shared/lib/class-names/classNames';
import { useTranslation } from 'react-i18next';
import styles from './navbar.module.scss';

interface INavbarProps {
  className?: string;
}
export const Navbar = ({ className }: INavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.navbar, [className])}>
      <div className={styles.links}></div>
    </div>
  );
};
