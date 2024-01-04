import { Modal } from 'shared/ui/modal/modal';
import { LoginForm } from '../login-form/loginForm';

type TLoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const LoginModal = (props: TLoginModalProps) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} isLazy>
      <LoginForm />
    </Modal>
  );
};
