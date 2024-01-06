import { classNames } from 'shared/lib/class-names/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button, EButtonTheme } from 'shared/ui/button/button';
import styles from './languageSwitcher.module.scss';

type TLanguageSwitcherProps = {
  className?: string;
  short?: boolean;
};

export const LanguageSwitcher = memo(
  ({ className, short }: TLanguageSwitcherProps) => {
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
        {short ? i18n.language.toLocaleUpperCase() : t('language')}
      </Button>
    );
  },
);
