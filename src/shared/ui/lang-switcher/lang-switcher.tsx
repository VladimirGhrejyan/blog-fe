import { FC } from 'react';
import { useTranslation } from 'react-i18next';
// shared
import { Button, EButtonTheme } from 'shared/ui/button/button';
import { classNames } from 'shared/lib/class-names/class-names';

interface IProps {
    className?: string;
}

export const LangSwitcher: FC<IProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language == 'en' ? 'ru' : 'en');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={EButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t('lang')}
        </Button>
    );
};
