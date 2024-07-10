import React from 'react';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';
import classes from './HelpSection.module.css';
import BackwardLink from "@/components/ui/BackwardLink/BackwardLink";

const HelpSection : React.FC = () => {
    return (
        <main className='container'>
            <div className={classes.HelpSection}>
                <div className={classes.container}>
                    <BackwardLink href='/' text='На главную' />
                    <h1>Помощь</h1>
                    <ul>
                        <li><a href="/contacts">Контакты</a></li>
                        <li><a href="/#size-chart">Размерная таблица</a></li>
                        <li><a href="/#payment">Оплата товара</a></li>
                        <li><a href="/#delivery-terms">Условия доставки</a></li>
                        <li><a href="/#returns">Возврат товара</a></li>
                        <li><a href="/#care-symbols">Знаки и уход за товарами</a></li>
                        <li><a href="/#promotions">Акции</a></li>
                    </ul>
                </div>
                <DeliveryInformation/>
            </div>
        </main>
    );
};

export default HelpSection;