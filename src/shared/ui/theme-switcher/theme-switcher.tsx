import { FC } from 'react';
// providers
import { useTheme, ETheme } from 'app/providers/theme-provider';
// shared
import { classNames } from 'shared/lib/class-names/class-names';
import { Button, EButtonTheme } from 'shared/ui/button/button';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
// styles
import cls from './theme-switcher.module.scss';

interface IProps {
    className?: string;
}

export const ThemeSwitcher: FC<IProps> = ({ className }) => {
    const { toggleTheme, theme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            theme={EButtonTheme.CLEAR}
            // className={classNames(cls.themeSwitcher, {}, [className])}
        >
            {theme === ETheme.LIGHT ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
