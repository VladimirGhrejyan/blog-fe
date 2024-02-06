import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
// shared
import { classNames } from 'shared/lib/class-names/class-names';
// styles
import classes from './app-link.module.scss';

export enum EAppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface IProps extends LinkProps {
    className?: string;
    theme?: EAppLinkTheme;
}

export const AppLink: FC<IProps> = ({
    theme = EAppLinkTheme.PRIMARY,
    className,
    children,
    ...linkProps
}) => {
    return (
        <Link
            {...linkProps}
            className={classNames(classes.appLink, {}, [className, classes[theme]])}
        >
            {children}
        </Link>
    );
};
