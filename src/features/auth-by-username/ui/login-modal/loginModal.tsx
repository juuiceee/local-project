import { Modal } from 'shared/ui/modal/modal';
import { classNames } from 'shared/lib/class-names/classNames';
import styles from './loginModal.module.scss';
import { LoginForm } from '../login-form/loginForm';

type TLoginModalProps = {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
};

export const LoginModal = (props: TLoginModalProps) => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal
      className={classNames(styles.loginModal, [className])}
      isOpen={isOpen}
      onClose={onClose}
      isLazy
    >
      <LoginForm />
    </Modal>
  );
};
