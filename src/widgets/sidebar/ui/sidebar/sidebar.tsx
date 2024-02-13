import { FC, useState } from 'react';
// shared
import { classNames } from 'shared/lib/class-names/class-names';
import { ThemeSwitcher } from 'shared/ui/theme-switcher/theme-switcher';
import { LangSwitcher } from 'shared/ui/lang-switcher/lang-switcher';
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
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
