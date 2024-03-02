import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/style-decorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/theme-decorator';
import { ETheme } from '../../src/app/providers/theme-provider/index';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [StyleDecorator, ThemeDecorator(ETheme.LIGHT)],
};

export default preview;
