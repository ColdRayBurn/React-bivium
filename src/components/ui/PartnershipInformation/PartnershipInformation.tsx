import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './PartnershipInformation.module.css';

// Импортируйте иконки, которые вы будете использовать
import RegistrationIcon from '@/assets/icons/registration.svg';
import FormIcon from '@/assets/icons/form.svg';
import AssessmentIcon from '@/assets/icons/assessment.svg';
import AgreementIcon from '@/assets/icons/agreement.svg';
import ManagerIcon from '@/assets/icons/manager.svg';
import LoginIcon from '@/assets/icons/login.svg';

interface Props {
    className?: string;
}

const PartnershipInformation: FC<Props> = ({ className }) => {
    return (
        <div className={classNames(className, styles.wrapper)}>
            <div className={styles.item}>
                <RegistrationIcon />
                <span>Необходимо пройти Регистрацию</span>
            </div>
            <div className={styles.item}>
                <FormIcon />
                <span>Заполнить Анкету и выслать её по адресу <a href="mailto:zakaz@bivium.ru">zakaz@bivium.ru</a></span>
            </div>
            <div className={styles.item}>
                <AssessmentIcon />
                <span>Ваша информация пройдет оценку</span>
            </div>
            <div className={styles.item}>
                <ManagerIcon />
                <span>С вами свяжется менеджер по продажам и вы обсудите условия</span>
            </div>
            <div className={styles.item}>
                <AgreementIcon />
                <span>Заключить договор</span>
            </div>
            <div className={styles.item}>
                <LoginIcon />
                <span>Вам будет выслан Логин и Пароль для Авторизации и дальнейшей успешной работы</span>
            </div>
        </div>
    );
};

export default PartnershipInformation;
