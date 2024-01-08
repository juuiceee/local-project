import { Select } from 'shared/ui/select/select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ECurrency } from '../model/types/currency';

type TCurrencySelectProps = {
  className?: string;
  value?: ECurrency;
  readOnly?: boolean;
  onChange?: (currency: ECurrency) => void;
};

const options = [
  {
    value: ECurrency.USD,
    content: ECurrency.USD,
  },
  {
    value: ECurrency.EUR,
    content: ECurrency.EUR,
  },
  {
    value: ECurrency.RUB,
    content: ECurrency.RUB,
  },
];

export const CurrencySelect = memo(
  ({ className, value, readOnly, onChange }: TCurrencySelectProps) => {
    const { t } = useTranslation();

    const handleOnChange = useCallback(
      (value: string) => {
        onChange?.(value as ECurrency);
      },
      [onChange],
    );

    return (
      <Select
        className={className}
        label={t('profile_label_currency')}
        options={options}
        value={value}
        onChange={handleOnChange}
        readOnly={readOnly}
      />
    );
  },
);
