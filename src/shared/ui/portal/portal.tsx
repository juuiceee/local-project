import { PropsWithChildren, memo } from 'react';
import { createPortal } from 'react-dom';

type TPortalProps = PropsWithChildren<{
  element?: HTMLElement;
}>;

export const Portal = memo((props: TPortalProps) => {
  const { children, element = document.body } = props;
  return createPortal(children, element);
});
