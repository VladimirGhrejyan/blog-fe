import React, { ButtonHTMLAttributes, FC } from 'react';
// shared
import { classNames } from 'shared/lib/class-names/class-names';
// styles
import cls from './button.module.scss';

export enum EButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum EButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: EButtonTheme;
    square?: boolean;
    size?: EButtonSize;
}

export const Button: FC<IProps> = ({
    className,
    theme,
    square,
    size = EButtonSize.M,
    children,
    ...buttonProps
}) => {
    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    };

    return (
        <button className={classNames(cls.button, mods, [className])} {...buttonProps}>
            {children}
        </button>
    );
};
