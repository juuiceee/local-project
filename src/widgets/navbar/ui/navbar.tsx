import { classNames } from 'shared/lib/class-names/classNames';
import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/button/button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/auth-by-username';
import styles from './navbar.module.scss';

type TNavbarProps = {
  className?: string;
};
export const Navbar = ({ className }: TNavbarProps) => {
  const { t } = useTranslation();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  return (
    <div className={classNames(styles.navbar, [className])}>
      <Button
        theme={EButtonTheme.CLEAR_INVERTED}
        className={styles.links}
        onClick={handleOpenModal}
      >
        {t('login')}
      </Button>
      <LoginModal isOpen={isOpenModal} onClose={handleCloseModal} />
    </div>
  );
};
