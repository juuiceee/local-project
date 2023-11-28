import { classNames } from 'shared/lib/helpers/class-names/class-names';
import './loader.scss';

interface ILoaderProps {
  className?: string;
}

export const Loader = ({ className }: ILoaderProps) => (
  <div className={classNames('lds-hourglass', [className])} />
);
