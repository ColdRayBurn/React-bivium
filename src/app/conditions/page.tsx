import React from 'react';
import styles from './Conditions.module.css';
import classes from '@/app/help/HelpSection.module.css';
import Button from '@/components/ui/Button/Button';
import PartnershipInformation from './PartnershipInformation';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';
import BackwardLink from '@/components/ui/BackwardLink/BackwardLink';


const Conditions: React.FC = () => {
    return (
        <main className='container'>
            <BackwardLink
                href={'/help'}
                text={'Помощь / Условия сотрудничества для оптовых покупателей'}
                className={classes.backwardLinkMargin}
            />
            <div className={styles.conditions}>
                <h1 className={styles.title}>Условия сотрудничества для оптовых покупателей</h1>
                <div className={styles.description}>
                    <div className={styles.element}>Уважаемые будущие партнеры. Если у вас розничный или оптовый магазин
                        спортивного направления, спортивная
                        школа, команда или медиа ресурс, мы будем рады сотрудничеству с Вами.
                    </div>

                    <div className={styles.element}>Предлагаем долгосрочные и взаимовыгодные отношения.</div>

                    <div className={styles.element}>Чтобы начать совместную работу, напишите письмо в свободной форме, о
                        своем проекте и пришлите его по
                        адресу <a href="mailto:zakaz@bivium.ru">zakaz@bivium.ru</a>
                    </div>
                </div>
                <PartnershipInformation/>
                <div className={styles.btns__container}>
                    <Button type='submit' variant='negative' icon={false}>Отправить заявку</Button>
                    <Button type='submit' variant='default' icon={false}>Скачать каталог новой коллекции</Button>
                </div>
                <DeliveryInformation className={styles.deliveryInformationContainer}/>
            </div>
        </main>
    );
};

export default Conditions;