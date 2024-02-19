import { screen } from '@testing-library/react';
import { Sidebar } from './sidebar';
import { renderWithTranslation } from 'shared/lib/tests/render-with-translation/render-with-translation';

describe('sidebar', () => {
    test('sidebar in the document', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
