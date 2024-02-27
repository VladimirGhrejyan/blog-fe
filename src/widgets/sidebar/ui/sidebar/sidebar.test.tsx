import { screen } from '@testing-library/react';
import { Sidebar } from './sidebar';
import { componentRender } from 'shared/lib/tests/component-render/component-render';

describe('sidebar', () => {
    test('sidebar in the document', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
