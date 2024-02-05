import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// components
import App from './app';
// providers
import ThemeProvider from './theme/theme.provider';

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
