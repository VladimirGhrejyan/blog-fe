import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// shared
import { routeConfig } from 'shared/config/route-config/route-config';
import { PageLoader } from 'shared/ui/page-loader/page-loader';

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className="page-wrapper">{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
