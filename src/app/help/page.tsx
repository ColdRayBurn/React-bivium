import React from 'react';
import classNames from 'classnames';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';
import classes from './HelpSection.module.css';
import BackwardLink from '@/components/ui/BackwardLink/BackwardLink';
import Link from 'next/link';

const HelpSection: React.FC = () => {
    return (
        <main className={classNames(classes.container, 'container', classes.HelpSection)}>
            <BackwardLink href='/' text='Помощь' className={classes.backwardLinkMargin}/>
            <h1 className={classNames(classes.title)}>Помощь</h1>
            <div className={classNames(classes.HelpSection__links)}>
                <Link href="/contacts" className={classNames(classes.HelpSection__link)}>Контакты</Link>
                <Link href="/#size-chart" className={classNames(classes.HelpSection__link)}>Размерная таблица</Link>
                <Link href="/#payment" className={classNames(classes.HelpSection__link)}>Оплата товара</Link>
                <Link href="/#delivery-terms" className={classNames(classes.HelpSection__link)}>Условия доставки</Link>
                <Link href="/#returns" className={classNames(classes.HelpSection__link)}>Возврат товара</Link>
                <Link href="/#care-symbols" className={classNames(classes.HelpSection__link)}>Знаки и уход за товарами</Link>
                <Link href="/#promotions" className={classNames(classes.HelpSection__link)}>Акции</Link>
            </div>
            <DeliveryInformation/>
        </main>
    );
};

export default HelpSection;

