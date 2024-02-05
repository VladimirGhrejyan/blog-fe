import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
// pages
import { MainPageAsync } from './pages/main-page/main-page.async';
import { AboutPageAsync } from './pages/about-page/about-page.async';
// hooks
import { useTheme } from './theme/use-theme.hook';
// helpers
import { classNames } from './helpers/class-names/class-names';
// styles
import './styles/index.scss';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
