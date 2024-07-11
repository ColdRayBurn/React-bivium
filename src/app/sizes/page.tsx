import React from 'react';
import styles from './SizesSection.module.css';
import classes from "@/app/help/HelpSection.module.css";
import BackwardLink from "@/components/ui/BackwardLink/BackwardLink";
import DeliveryInformation from "@/components/ui/DeliveryInformation/DeliveryInformation";


const sizeCharts = [
    {
        title: 'Мужская одежда',
        image: '/images/sizes.png',
        alt: 'Мужская одежда размерная таблица'
    },
    {
        title: 'Женская одежда',
        image: '/images/sizes-female.png',
        alt: 'Женская одежда размерная таблица'
    },
    {
        title: 'Детская одежда',
        image: '/images/sizes-kids.png',
        alt: 'Детская одежда размерная таблица'
    }
];

const SizesSection: React.FC = () => {
    return (
        <div className={styles.container}>
            <BackwardLink href='/help' text='Помощь / Размерная таблица' className={classes.backwardLinkMargin}/>
            <h1 className={styles.title}>Размерная страница</h1>
            <div className={styles.description}>
                Данный раздел создан, для того чтобы вы могли легко и безошибочно подобрать свой костюм BIVIUM.
                Напоминаем вам, что стандартно в наших изделиях предусмотрена посадка Slim fit и если вы хотите
                увеличить степень облегания или наоборот добавить свободы, то вам следует выбрать соответственно размер
                меньше или больше от желаемого. Также, на странице каждого товара есть кнопка «таблица размеров», нажав
                на которую, Вы сможете увидеть таблицу замеров для всех размеров данного товара.
            </div>
            {sizeCharts.map((img, index) => (
                <div key={index} className={styles.imageGenerator}>
                    <img src={img.image} alt={img.alt} className={styles.image}/>
                </div>
            ))}
            <div className={styles.deliveryInformationContainer}>
                <DeliveryInformation/>
            </div>
        </div>

    );
};

export default SizesSection;