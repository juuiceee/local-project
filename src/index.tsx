import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/theme-provider';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';
import { ErrorBoundary } from 'app/providers/error-boundary';
import App from './app/app';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
