import { classNames } from 'shared/lib/class-names/classNames';
import './loader.scss';

interface ILoaderProps {
  className?: string;
}

export const Loader = ({ className }: ILoaderProps) => (
  <div className={classNames('lds-hourglass', [className])} />
);
