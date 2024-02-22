import { FC } from 'react';
// providers
import { useTheme, ETheme } from 'app/providers/theme-provider';
// shared
import { Button, EButtonTheme } from 'shared/ui/button/button';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
// styles

interface IProps {
    className?: string;
}

export const ThemeSwitcher: FC<IProps> = () => {
    const { toggleTheme, theme } = useTheme();

    return (
        <Button onClick={toggleTheme} theme={EButtonTheme.CLEAR}>
            {theme === ETheme.LIGHT ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
