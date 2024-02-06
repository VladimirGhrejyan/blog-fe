import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// components
import App from './app/app';
// providers
import { ThemeProvider } from 'app/providers/theme-provider';

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
