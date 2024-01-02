import { classNames } from 'shared/lib/class-names/classNames';
import { useTranslation } from 'react-i18next';
import styles from './notFoundPage.module.scss';

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: INotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.notFoundPage, [className])}>
      {t('not_found_title')}
    </div>
  );
};
