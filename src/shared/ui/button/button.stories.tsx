import type { Meta, StoryObj } from '@storybook/react';

import { Button, EButtonTheme } from './button';

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ClearButton: Story = {
    args: {
        theme: EButtonTheme.CLEAR,
        children: 'Test',
    },
};

export const OutlineButton: Story = {
    args: {
        theme: EButtonTheme.OUTLINE,
        children: 'Test',
    },
};
