import React from 'react';
import Article from '@/components/ui/Article/Article';
import styles from './SizesSection.module.css';

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
    const content = (
        <>
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
        </>
    );

    return (
        <Article
            title='Размерная страница'
            backLinkText='Помощь / Размерная таблица'
            backLinkHref='/help'
            content={content}
        />
    );
};

export default SizesSection;
