import { FC } from 'react';
import { useTranslation } from 'react-i18next';
// styles
import cls from './not-found-page.module.scss';

const NotFoundPage: FC = () => {
    const { t } = useTranslation();

    return <div className={cls.notFoundPage}>{t('not_found')}</div>;
};

export default NotFoundPage;
