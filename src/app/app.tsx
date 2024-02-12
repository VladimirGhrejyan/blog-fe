// providers
import { AppRouter } from 'app/providers/router';
// widgets
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
// hooks
import { useTheme } from 'app/providers/theme-provider';
// shared
import { classNames } from 'shared/lib/class-names/class-names';
// styles
import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
