/* eslint-disable react/display-name */
import { StoryFn } from '@storybook/react';
import { ETheme } from 'app/providers/theme-provider';

export const ThemeDecorator = (theme: ETheme) => (Story: StoryFn) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
