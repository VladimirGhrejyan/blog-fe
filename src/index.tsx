import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// components
import App from './app/app';
// providers
import { ThemeProvider } from 'app/providers/theme-provider';
import { ErrorBoundary } from 'app/providers/error-boundary';

import 'shared/config/i18n/i18n';

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
