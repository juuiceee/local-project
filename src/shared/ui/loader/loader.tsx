import { classNames } from 'shared/lib/class-names/classNames';
import './loader.scss';
import { memo } from 'react';

type TLoaderProps = {
  className?: string;
};

export const Loader = memo(({ className }: TLoaderProps) => (
  <div className={classNames('lds-hourglass', [className])} />
));
