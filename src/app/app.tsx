// providers
import { AppRouter } from 'app/providers/router';
// widgets
import { Navbar } from 'widgets/navbar';
// hooks
import { useTheme } from 'app/providers/theme-provider';
// shared
import { classNames } from 'shared/lib/class-names/class-names';
// styles
import './styles/index.scss';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;
