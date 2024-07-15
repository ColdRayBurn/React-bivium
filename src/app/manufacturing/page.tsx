import { FC } from 'react';
import Article from '@/components/Article/Article';
import styles from './page.module.css';

const Page: FC = () => {
  return <Article breadсrumbs={[{ name: 'О компании', path: '/about-company' }, { name: 'О производстве', path: '/manufacturing' }]} title='О производстве' content={
    <>
      В наш продукт, уже не стадии разработки закладывается определенный разумный код. Его цель создание продукта гармонично сочетающего в себе в основных аспекта:
      <ul>
        <li>Функциональность - обеспечивает нашему потребителю свободу передвижения, свободу выбора собственного пути, не привязанного к проложенной трассе.</li>
        <li>Технологичность - крой учитывающий анатомию строения человека, технологичные ткани и современное производство.</li>
        <li>Стильный и лаконичный дизайн - забота и эстетика, каждый элемент одежды должен быть оправдан. Мы не делаем лишний карман на шортах, в угоду веяньям моды.</li>
      </ul>
      <iframe className={styles.video} src="https://www.youtube.com/embed/M7T0_xWKmTo" title="Геморрой. Лечение живым огурцом" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      Именно поэтому мы создали понятие &quot;разумного подхода&quot;, который наблюдается и проявляется во всех сферах жизни нашего бренда: Разумный подход к жизни, разу
      мный подход к производству, разумный подход к продукту.<br />
      Наша производственная площадка это: собственный экспериментальный цех в Москве и небольшое производство в Подмосковье, которые оснащены оптимальным набором оборудования, отвечающего последнему слову техники:<br />
      -компьютерное проектирование и моделирование будущих изделий,<br />
      -термический прокрас и нанесение изображения на ткань,<br />
      -лазерный крой,<br />
      -герметизация швов.<br />
      Четкий и методичный подход к созданию разумного производства, находит свое отражение не только в приобретении и применении высокотехничного оборудования, но и в точном расчете оптимального количества сотрудников, а также в нашем стремлении к безотходности.<br />
      При необходимости, мы не стесняемся обращаться к профессиональным производствам, расположенным за границей, так как наивысшей целью для нас является создание для вас высоко качественного продукта.
    </>
  } />;
};

export default Page;
