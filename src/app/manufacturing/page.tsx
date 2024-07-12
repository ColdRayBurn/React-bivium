import React from 'react';
import Article from '@/components/Article/Article';
import styles from './Manufacturing.module.css';

const Manufacturing: React.FC = () => {

    const content = (
        <>
            <div className={styles.section}>
                <div className={styles.section__block}>
                    <div className={styles.paragraph}>
                        В наш продукт, уже на стадии разработки закладывается определенный разумный код. Его цель
                        создание продукта гармонично сочетающего в себе 3 основных аспекта:
                    </div>
                    <div className={styles.list}>
                        <div className={styles.listItem}>Функциональность - обеспечивает нашему потребителю свободу
                            передвижения, свободу выбора собственного пути, не привязанного к проложенной трассе.
                        </div>
                        <div className={styles.listItem}>Технологичность - крой учитывающий анатомию строения человека,
                            технологичные ткани и современное производство.
                        </div>
                        <div className={styles.listItem}>Стильный и лаконичный дизайн - забота и эстетика, каждый
                            элемент одежды должен быть оправдан. Мы не делаем лишний карман на шортах, в угоду веяньям
                            моды.
                        </div>
                    </div>
                </div>
                <div className={styles.videoContainer}>
                    <iframe width="1042" height="482" src="https://www.youtube.com/embed/Видео_ID"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
                <div className={styles.section__block}>
                    <div className={styles.paragraph}>
                        Именно поэтому мы создали понятие "разумного подхода", который наблюдается и проявляется во всех
                        сферах жизни нашего бренда: Разумный подход к жизни, разумный подход к производству, разумный подход
                        к продукту.
                    </div>
                    <div className={styles.paragraph}>
                        Наша производственная площадка это: собственный экспериментальный цех в Москве и небольшое
                        производство в Подмосковье, которые оснащены оптимальным набором оборудования, отвечающего последнему слову техники:
                    </div>
                    <div className={styles.list}>
                        <div className={styles.listItem__no_dots}>- компьютерное проектирование и моделирование будущих изделий,</div>
                        <div className={styles.listItems__no_dots}>- термический прогресс и нанесение изображения на ткань,</div>
                        <div className={styles.listItems__no_dots}>- лазерный крой,</div>
                        <div className={styles.listItems__no_dots}>- герметизация швов.</div>
                    </div>
                    <div className={styles.paragraph}>
                        Четкий и методичный подход к созданию разумного производства, находит свое отражение не только в приобретении и применении высокотехнологичного оборудования, но и в точном расчете оптимального количества сотрудников, а также в нашем стремлении к безотходности.
                    </div>
                    <div className={styles.paragraph}>
                        При необходимости, мы не стесняемся обращаться к профессиональным производствам, которым можем всецело доверять, так как наивысшей целью для нас является создание для вас высоко качественного продукта.
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <Article
            title={'О производстве'}
            backLinkText={'О компании / О производстве'}
            backLinkHref={'/about-company'}
            content={content}
        />
    );
};

export default Manufacturing;