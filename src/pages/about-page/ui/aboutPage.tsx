import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = memo(() => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('about_title')}</p>
    </div>
  );
});

export default AboutPage;
