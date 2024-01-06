import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('main_title')}</p>
    </div>
  );
});

export default MainPage;
