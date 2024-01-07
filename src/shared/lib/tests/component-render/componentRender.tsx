import { render } from '@testing-library/react';
import { StoreProvider, TStateSchema } from 'app/providers/store-provider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/config/i18n/i18nForTests';

export type TComponentRenderOptions = {
  route?: string;
  initialState?: DeepPartial<TStateSchema>;
};

export function componentRender(
  component: ReactNode,
  options: TComponentRenderOptions = {},
) {
  const { route = '/', initialState } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
}
