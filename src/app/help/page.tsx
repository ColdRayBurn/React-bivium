import React from 'react';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';
import classes from './HelpSection.module.css';

const HelpSection : React.FC = () => {
    return (
        <div className={classes.HelpSection}>
            <div className={classes.container}>
                <h1>Помощь</h1>
                <ul>
                    <li><a href="/contacts">Контакты</a></li>
                    <li><a href="/size-chart">Размерная таблица</a></li>
                    <li><a href="/payment">Оплата товара</a></li>
                    <li><a href="/delivery-terms">Условия доставки</a></li>
                    <li><a href="/returns">Возврат товара</a></li>
                    <li><a href="/care-symbols">Знаки и уход за товарами</a></li>
                    <li><a href="/promotions">Акции</a></li>
                </ul>
            </div>
            <DeliveryInformation/>
        </div>
    );
};

export default HelpSection;