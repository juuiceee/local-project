import { classNames } from 'shared/lib/class-names/classNames';
import { Loader } from 'shared/ui/loader/loader';
import styles from './pageLoader.module.scss';

interface IPageLoaderProps {
  className?: string;
}
export const PageLoader = ({ className }: IPageLoaderProps) => (
  <div className={classNames(styles.pageLoader, [className])}>
    <Loader />
  </div>
);
