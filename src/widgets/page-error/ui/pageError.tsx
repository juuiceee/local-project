import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/classNames';
import { Button } from 'shared/ui/button/button';
import styles from './pageError.module.scss';

type TPageErrorProps = {
  className?: string;
};

export const PageError = ({ className }: TPageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => window.location.reload();

  return (
    <div className={classNames(styles.pageError, [className])}>
      <p>{t('page_error_title')}</p>
      <Button onClick={reloadPage}>{t('reload_page_button')}</Button>
    </div>
  );
};
