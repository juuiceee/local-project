import './styles/index.scss';
import { classNames } from 'shared/lib/helpers/class-names/class-names';
import { useTheme } from 'app/providers/theme-provider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme], {})}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
