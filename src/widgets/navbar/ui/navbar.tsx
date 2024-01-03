import { classNames } from 'shared/lib/class-names/classNames';
import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/button/button';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/modal/modal';
import styles from './navbar.module.scss';

interface INavbarProps {
  className?: string;
}
export const Navbar = ({ className }: INavbarProps) => {
  const { t } = useTranslation();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleToggleModal = useCallback(() => {
    setIsOpenModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.navbar, [className])}>
      <Button
        theme={EButtonTheme.CLEAR_INVERTED}
        className={styles.links}
        onClick={handleToggleModal}
      >
        {t('login')}
      </Button>
      <Modal isOpen={isOpenModal} onClose={handleToggleModal}>
        {/* eslint-disable-next-line */}
        <p>asd</p>
      </Modal>
    </div>
  );
};
