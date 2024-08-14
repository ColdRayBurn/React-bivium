import { FC } from 'react';

import Article from '@/components/Article/Article';
import ClientPopupButton from '@/components/ClientPopupButton/ClientPopupButton';

import api from '@/api';
import { IVacancy } from '@/api/models';

import { formatUrl } from '@/utils/formatUrl';

import styles from './page.module.css';

interface Props {
  params: { id: string };
}

const Page: FC<Props> = async ({ params: { id } }) => {
  const vacancy = await api.get(`vacancies/${id}/`).json<IVacancy>();

  return (
    <Article
      breadсrumbs={[
        { name: 'О компании', path: '/about-company' },
        { name: 'Вакансии', path: '/vacancies' },
        { name: vacancy.name, path: `/vacancies/${vacancy.id}` }
      ]}
      title={vacancy.name}
      content={
        <div className={styles.wrapper}>
          <img className={styles.image} src={formatUrl(vacancy.image)} alt='' />
          <div className={styles.details}>
            <div className={styles.detailsItem}>
              <div className={styles.detailsItemTitle}>Город</div>
              <div className={styles.detailsItemValue}>{vacancy.city}</div>
            </div>
            <div className={styles.detailsItem}>
              <div className={styles.detailsItemTitle}>Зарплата</div>
              <div className={styles.detailsItemValue}>{vacancy.salary}</div>
            </div>
            <div className={styles.detailsItem}>
              <div className={styles.detailsItemTitle}>Опыт работы</div>
              <div className={styles.detailsItemValue}>{vacancy.experience}</div>
            </div>
            <div className={styles.detailsItem}>
              <div className={styles.detailsItemTitle}>Тип работы</div>
              <div className={styles.detailsItemValue}>{vacancy.workType}</div>
            </div>
          </div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque molestiae at eius officia vitae
            commodi a provident! Corrupti voluptas nam nisi dolorem similique modi officiis recusandae excepturi nostrum
            sapiente, veniam quam maxime quaerat, illum ab, consequatur saepe? Ea earum deserunt in necessitatibus
            repellat minima quod possimus assumenda sed fuga debitis esse veniam accusamus harum molestias eaque officia
            labore, rem itaque sint laboriosam? Amet at libero molestias consequuntur, porro dolor. Porro hic eius
            molestias animi iste quod est aut tenetur inventore perspiciatis! Voluptas aliquam a beatae, sapiente non
            minima voluptate! Accusantium enim adipisci, natus tempore neque, odit, quae consequuntur autem vitae
            incidunt quod laudantium suscipit ut expedita doloremque. Cum perspiciatis minus nihil dolore voluptatibus
            nobis accusantium velit similique incidunt optio placeat, asperiores sunt nostrum, corporis dolor
            consequatur totam inventore doloribus nulla quaerat quisquam unde culpa magni. Repellat eaque esse fuga ab
            accusantium earum cumque, suscipit quod reiciendis obcaecati, totam consectetur! Voluptatem suscipit ipsum
            odio dolorum? Quisquam a, commodi corporis ex quia tempore distinctio, ratione nihil saepe eaque quas. Nobis
            ratione autem, et iste nemo qui, magnam vel sequi asperiores accusantium aperiam voluptate dolores totam
            alias nostrum pariatur debitis quibusdam distinctio error eum magni nam. Necessitatibus eius modi iste
            cupiditate amet vitae, officiis possimus libero consequuntur repudiandae saepe dolorum minus. Quis
            repellendus voluptas blanditiis veniam ipsa, delectus quo quos, debitis at commodi quisquam eos tempore?
            Fuga placeat qui veritatis aliquid repellendus molestias debitis culpa aut sint optio omnis numquam ipsum
            quia perferendis asperiores modi tempora consequatur nostrum sunt accusamus, corporis magni commodi ex
            perspiciatis. Esse dolorem obcaecati eveniet quo laboriosam porro necessitatibus ipsa nulla unde optio sit
            quidem quasi ut suscipit, aliquid aliquam quis, perferendis facere sunt ab. Excepturi dicta libero beatae
            rerum alias modi, blanditiis natus eum, pariatur amet provident id, totam saepe repudiandae ipsam in!
            Doloremque suscipit debitis neque illo quibusdam, magni tempora asperiores fuga facere saepe eligendi fugit
            quas maiores quae obcaecati reiciendis sed dignissimos repudiandae aperiam cumque voluptate quidem. Ratione
            voluptatibus ipsa reprehenderit assumenda, ullam quod cupiditate modi aliquid, deleniti delectus quas! Porro
            dolor doloribus eaque modi ad consequatur dicta iure soluta labore dolorem, enim tempore doloremque
            distinctio quibusdam deleniti, debitis maxime. Laboriosam nihil quo minima impedit error nam corrupti quos
            excepturi tempore sunt repellat libero praesentium perspiciatis accusantium possimus commodi eum earum, unde
            autem vero alias! Et laudantium minus veniam reprehenderit commodi labore sapiente atque distinctio
            molestiae? Aperiam impedit vitae labore neque debitis totam accusamus qui. Animi, reprehenderit rerum
            repellendus quidem pariatur ipsum aliquam esse consequatur illo, perspiciatis iusto soluta illum! Itaque,
            autem unde! Iure, unde. Totam iusto facilis voluptatibus voluptas consequatur ipsam veritatis esse quis,
            quibusdam, iste praesentium molestias, sint architecto. Praesentium laborum quibusdam perspiciatis sequi
            maiores, nam ipsum minus a tenetur modi temporibus corrupti provident dignissimos minima voluptates eum
            consequuntur, architecto voluptatem, ipsam vero quam ipsa quia odio vitae. Reiciendis repudiandae,
            exercitationem soluta nihil, impedit magni consequuntur earum natus laboriosam ex voluptatum libero. Cumque
            quaerat fuga vitae, id ipsa, ducimus molestiae culpa voluptatibus unde dolor est? Modi repellendus
            repudiandae atque animi, aliquam maxime eum?
          </div>
          <div className={styles.button}>
            <ClientPopupButton
              buttonText='Отправить резюме'
              formTitle='Отправить резюме'
              submitButtonText='Отправить'
              cancelButtonText='Отменить'
              icon={false}
              apiEndpoint='feedback/resume/'
            />
          </div>
        </div>
      }
    />
  );
};

export default Page;
