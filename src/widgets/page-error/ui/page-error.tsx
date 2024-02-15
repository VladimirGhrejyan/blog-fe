import { FC } from 'react';
import { useTranslation } from 'react-i18next';
// shared
import { classNames } from 'shared/lib/class-names/class-names';
import { Button } from 'shared/ui/button/button';
// styles
import cls from './page-error.module.scss';

interface IProps {
    className?: string;
}

export const PageError: FC<IProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.errorPage, {}, [className])}>
            <p>{t('unexpected_error')}</p>
            <Button onClick={reloadPage}>{t('refresh_page')}</Button>
        </div>
    );
};
