import { classNames } from 'shared/lib/class-names/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './notFoundPage.module.scss';

type TNotFoundPageProps = {
  className?: string;
};

export const NotFoundPage = memo(({ className }: TNotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.notFoundPage, [className])}>
      {t('not_found_title')}
    </div>
  );
});
