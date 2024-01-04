import {
  MouseEvent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib/class-names/classNames';
import styles from './modal.module.scss';
import { Portal } from '../portal/portal';

type TModalProps = PropsWithChildren<{
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}>;

const ANIMATION_DELAY = 300;

export const Modal = (props: TModalProps) => {
  const { children, className, isOpen, onClose } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.closing]: isClosing,
  };

  const handleOnClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleOnClose();
      }
    },
    [handleOnClose],
  );

  const handleOnContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    clearTimeout(timerRef.current);
  }, [isOpen, handleKeyDown]);

  return (
    <Portal>
      <div className={classNames(styles.Modal, [className], mods)}>
        <div className={styles.overlay} onClick={handleOnClose}>
          <div className={styles.content} onClick={handleOnContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
