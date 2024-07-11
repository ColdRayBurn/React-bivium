import React from 'react';
import styles from './CareSection.module.css';
import classes from "@/app/help/HelpSection.module.css";
import BackwardLink from "@/components/ui/BackwardLink/BackwardLink";
import DeliveryInformation from "@/components/ui/DeliveryInformation/DeliveryInformation";

const CareSection: React.FC = () => {

    const images = {
        title: 'Мужская одежда',
        src: '/images/care.png',
        alt: 'Знаки и правила ухода за товарами'
    };

    return (
        <div className={styles.container}>
            <BackwardLink href='/help' text='Помощь / Знаки и правила ухода за товарами'
                          className={classes.backwardLinkMargin}/>
            <h1 className={styles.title}>Знаки и правила ухода за товарами</h1>
            <div className={styles.imageContainer}>
                <img src={images.src} alt={images.alt} className={styles.image}/>
            </div>
            <div className={styles.description}>Чтобы вещи дольше сохраняли первоначальный вид, выглядели хорошо даже
                после множества стирок нужно за ней правильно ухаживать. Выбор спортивной одежды – это только полдела,
                поэтому несколько рекомендаций от наших технологов по уходу:
            </div>
            <div className={styles.paragraph}>Основные рекомендации по уходу за спортивной одеждой</div>
            <div className={styles.paragraph}>
                Перед стиркой, как бы это не было очевидно, нужно прочитать то, что написано на этикетке. Производители
                очень часто оставляют точные указания по уходу за одеждой. Это делается для того, чтобы изделие дольше
                сохраняли цвет и основные свойства ткани. Ну и конечно, проверить карманы, застегнуть все молнии и
                липкие застежки.
            </div>
            <div className={styles.paragraph}>
                Спортивную одежду, как правило запрещено отбеливать и использовать прочие аналогичные средства. При
                стирке не желательно пользоваться кондиционерами и другими подобными средствами. Все потому, что
                спортивная одежда зачастую обрабатывается специальными составами, которые обеспечивают защиту от
                ультрафиолетовых лучей. Со временем следы этой обработки исчезнут, но ускорять этот процесс при помощи
                дополнительных средств незачем. Более того, использование этих средств негативно влияет на эластичные
                свойства ткани.
            </div>
            <div className={styles.paragraph}>
                Если костюм изготовлен из высокотехнологичных материалов, то лучше стирать в холодной воде. При высокой
                температуре структура ткани таких вещей склонна разрушаться, и поэтому быстрее теряют свои качества.
            </div>
            <div className={styles.paragraph}>
                Более предпочтительной программой для стирки – это деликатная стирка. Стандартный режим негативно влияет
                на эластичность и свойства материалов, и также приводит к быстрому износу.
            </div>
            <div className={styles.paragraph}>
                В идеале сушить спортивную одежду нужно в прохладном месте с низким содержанием влажности в воздухе.
                Горячий воздух вредит в особенности тянущимся тканям: они теряют эластичность и со временем начинают
                сыпаться и линять.
            </div>
            <div className={styles.paragraph}>
                При глажке спортивной одежды оптимальным режимом на утюге будут: минимальный или умеренный. Обычно,
                режим выбирается согласно типу материала, который указан на этикетке изделия. Некоторые ткани из которых
                изготавливается одежда для занятий спортом, как например эластан, спандекс или лайкра, лучше вообще не
                гладить. Эти ткани отличаться повышенными показателями эластичности, и при воздействии на них высокой
                температуры могут подвергнуть деформации.
            </div>
            <div className={styles.deliveryInformationContainer}>
                <DeliveryInformation/>
            </div>
        </div>
    );
};

export default CareSection;