/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';
// shared
import { classNames } from 'shared/lib/class-names/class-names';
import { AppLink, EAppLinkTheme } from 'shared/ui/app-link/app-link';
import { EAppRoutes } from 'shared/config/route-config/route-config';
// styles
import cls from './navbar.module.scss';

interface IProps {
    className?: string;
}

export const Navbar: FC<IProps> = ({ className }) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to={EAppRoutes.MAIN}
                    className={cls.mainLink}
                    theme={EAppLinkTheme.SECONDARY}
                >
                    Main
                </AppLink>
                <AppLink to={EAppRoutes.ABOUT} theme={EAppLinkTheme.SECONDARY}>
                    About
                </AppLink>
            </div>
        </div>
    );
};
