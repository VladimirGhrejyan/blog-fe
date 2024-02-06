import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// shared
import { routeConfig } from 'shared/config/route-config/route-config';

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
};
