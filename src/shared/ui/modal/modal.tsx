import {
  MouseEvent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib/class-names/classNames';
import { useTheme } from 'app/providers/theme-provider';
import styles from './modal.module.scss';
import { Portal } from '../portal/portal';

type TModalProps = PropsWithChildren<{
  className?: string;
  isOpen?: boolean;
  isLazy?: boolean;
  onClose?: () => void;
}>;

const ANIMATION_DELAY = 300;

export const Modal = (props: TModalProps) => {
  const { children, className, isOpen, isLazy, onClose } = props;

  const { theme } = useTheme();

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.closing]: isClosing,
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

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

  if (isLazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(
          styles.Modal,
          [className, theme, 'app_modal'],
          mods,
        )}
      >
        <div className={styles.overlay} onClick={handleOnClose}>
          <div className={styles.content} onClick={handleOnContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
