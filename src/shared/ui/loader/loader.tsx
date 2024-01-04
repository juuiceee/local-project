import { classNames } from 'shared/lib/class-names/classNames';
import './loader.scss';

type TLoaderProps = {
  className?: string;
};

export const Loader = ({ className }: TLoaderProps) => (
  <div className={classNames('lds-hourglass', [className])} />
);
