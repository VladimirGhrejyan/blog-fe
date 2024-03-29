import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
// shared
import i18nForTests from 'shared/config/i18n/i18n-for-tests';

interface IComponentRenderOptions {
    route?: string;
}

export const componentRender = (component: ReactNode, options: IComponentRenderOptions = {}) => {
    const { route = '/' } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
        </MemoryRouter>,
    );
};
