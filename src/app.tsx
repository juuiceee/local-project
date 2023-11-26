import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import AboutPageAsync from './pages/about-page/index.async';
import MainPageAsync from './pages/main-page/index.async';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/class-names/class-names';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', [theme], {})}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <button onClick={toggleTheme}>change theme</button>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
