import React from 'react';
import styles from './Conditions.module.css';
import Article from '@/components/ui/Article/Article';
import Button from '@/components/ui/Button/Button';
import PartnershipInformation from '@/components/ui/PartnershipInformation/PartnershipInformation';

const Conditions: React.FC = () => {
    const content = (
        <>
            <div className={styles.description}>
                <div className={styles.element}>Уважаемые будущие партнеры. Если у вас розничный или оптовый магазин
                    спортивного направления, спортивная
                    школа, команда или медиа ресурс, мы будем рады сотрудничеству с Вами.
                </div>

                <div className={styles.element}>Предлагаем долгосрочные и взаимовыгодные отношения.</div>

                <div className={styles.element}>Чтобы начать совместную работу, напишите письмо в свободной форме, о
                    своем проекте и пришлите его по
                    адресу <u>zakaz@bivium.ru</u>
                </div>
            </div>
            <PartnershipInformation/>
        </>
    );

    const buttons = (
        <div className={styles.btns__container}>
            <Button type='submit' variant='negative' icon={false}>Отправить заявку</Button>
            <Button type='submit' variant='default' icon={false}>Скачать каталог новой коллекции</Button>
        </div>
    );

    return (
        <Article
            title='Условия сотрудничества для оптовых покупателей'
            backLinkText='Помощь / Условия сотрудничества для оптовых покупателей'
            backLinkHref='/help'
            content={content}
            buttons={buttons}
        />
    );
};

export default Conditions;