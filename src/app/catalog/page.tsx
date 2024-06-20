import { FC } from 'react';
import styles from './page.module.css';

import Catalog from './Catalog';
import ExpandableText from '@/components/ui/ExpandableText/ExpandableText';
import DeliveryInformation from '@/components/ui/DeliveryInformation/DeliveryInformation';

const Page: FC = async () => {
  const json = await fetch('http://bivium.all4it.org/api/catalog/meta/').then(response => response.json());

  return (
    <main className='container'>
      <Catalog items={json.CATALOG_LIST.data.elements} />
      <div className={styles.description}>
        <h2 className={styles.descriptionTitle}>О производстве</h2>
        <ExpandableText className={styles.descriptionText}>
          Наша производственная площадка это: собственный экспериментальный цех в Москве и небольшое производство в Подмосковье, которые оснащены оптимальным набором оборудования, отвечающего последнему слову техники:
          -компьютерное проектирование и моделирование будущих изделий,
          -термический прокрас и нанесение изображения на ткань,
          -лазерный крой,
          -герметизация швов.
          Четкий и методичный подход к созданию разумного производства, находит свое отражение не только в приобретении и применении высокотехничного оборудования, но и в точном расчете оптимального количества сотрудников, а также в нашем стремлении к безотходности.
        </ExpandableText>
      </div>
      <DeliveryInformation className={styles.deliveryInformation} />
    </main>
  );
};

export default Page;
