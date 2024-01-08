import { Select } from 'shared/ui/select/select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ECountry } from '../model/types/country';

type TCountrySelectProps = {
  className?: string;
  value?: ECountry;
  readOnly?: boolean;
  onChange?: (country: ECountry) => void;
};

const options = [
  {
    value: ECountry.AUS,
    content: ECountry.AUS,
  },
  {
    value: ECountry.CAN,
    content: ECountry.CAN,
  },
  {
    value: ECountry.JPN,
    content: ECountry.JPN,
  },
  {
    value: ECountry.RU,
    content: ECountry.RU,
  },
  {
    value: ECountry.UK,
    content: ECountry.UK,
  },
  {
    value: ECountry.USA,
    content: ECountry.USA,
  },
];

export const CountrySelect = memo(
  ({ className, value, readOnly, onChange }: TCountrySelectProps) => {
    const { t } = useTranslation();

    const handleOnChange = useCallback(
      (value: string) => {
        onChange?.(value as ECountry);
      },
      [onChange],
    );

    return (
      <Select
        className={className}
        label={t('profile_label_country')}
        options={options}
        value={value}
        onChange={handleOnChange}
        readOnly={readOnly}
      />
    );
  },
);
