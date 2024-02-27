/* eslint-disable i18next/no-literal-string */
import { FC, useState } from 'react';
// shared
import { classNames } from 'shared/lib/class-names/class-names';
import { ThemeSwitcher } from 'shared/ui/theme-switcher/theme-switcher';
import { LangSwitcher } from 'shared/ui/lang-switcher/lang-switcher';
import { Button, EButtonSize } from 'shared/ui/button/button';
// styles
import cls from './sidebar.module.scss';

interface IProps {
    className?: string;
}

export const Sidebar: FC<IProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button onClick={onToggle} className={cls.collapseButton} square size={EButtonSize.L}>
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
