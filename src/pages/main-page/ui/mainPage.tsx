import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('main_title')}</p>
    </div>
  );
};

export default MainPage;
