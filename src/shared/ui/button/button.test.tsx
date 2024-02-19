import { render, screen } from '@testing-library/react';
import { Button, EButtonTheme } from './button';

describe('button', () => {
    test('button content', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('button className', () => {
        render(<Button theme={EButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
