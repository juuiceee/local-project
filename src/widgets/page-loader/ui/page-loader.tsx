import { classNames } from 'shared/lib/helpers/class-names/class-names';
import { Loader } from 'shared/ui/loader/loader';
import styles from './page-loader.module.scss';

interface IPageLoaderProps {
  className?: string;
}
export const PageLoader = ({ className }: IPageLoaderProps) => (
  <div className={classNames(styles.pageLoader, [className])}>
    <Loader />
  </div>
);
