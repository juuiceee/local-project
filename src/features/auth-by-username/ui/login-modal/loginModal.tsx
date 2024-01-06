import { Modal } from 'shared/ui/modal/modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/loader/loader';
import LoginFormAsync from '../login-form/loginFormAsync';

type TLoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const LoginModal = (props: TLoginModalProps) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} isLazy>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
