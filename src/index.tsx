import { render } from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContext } from './theme/theme-context';
import ThemeProvider from './theme/theme-provider';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
