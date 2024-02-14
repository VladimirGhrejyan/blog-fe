import { ButtonHTMLAttributes, FC } from 'react';
// shared
import { classNames } from 'shared/lib/class-names/class-names';
// styles
import cls from './button.module.scss';

export enum EButtonTheme {
    CLEAR = 'clear',
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: EButtonTheme;
}

export const Button: FC<IProps> = ({ className, theme, children, ...buttonProps }) => {
    return (
        <button
            className={classNames(cls.button, { [cls[theme]]: true }, [className])}
            {...buttonProps}
        >
            {children}
        </button>
    );
};
