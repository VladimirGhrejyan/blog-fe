import { FC } from 'react';
// shared
import { classNames } from 'shared/lib/class-names/class-names';
// styles
import cls from './loader.module.scss';

interface IProps {
    className?: string;
}

export const Loader: FC<IProps> = ({ className }) => {
    return (
        <div className={classNames(cls['lds-default'], {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
