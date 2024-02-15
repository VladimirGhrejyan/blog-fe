import { FC } from 'react';
// shared
import { classNames } from 'shared/lib/class-names/class-names';
import { Loader } from 'shared/ui/loader/loader';
// styles
import cls from './page-loader.module.scss';

interface IProps {
    className?: string;
}

export const PageLoader: FC<IProps> = ({ className }) => {
    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
