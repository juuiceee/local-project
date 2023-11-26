import { classNames } from 'shared/lib/helpers/class-names/class-names';
import styles from './language-switcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/button/button';

interface ILanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: ILanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(styles.languageSwitcher, [className])}
      theme={EButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t('language')}
    </Button>
  );
};
