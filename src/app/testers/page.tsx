import { FC } from 'react';

import Article from '@/components/Article/Article';
import Button from '@/components/ui/Button/Button';

import styles from './page.module.css';

const Page: FC = () => {
  return <Article breadсrumbs={[{ name: 'Помощь', path: '/help' }, { name: 'Стать тестировщиком', path: '/testers' }]} title='Стать тестировщиком' content={
    <>
      <div className={styles.wrapper}>
        <div className={styles.body}>
          Нам очень важна обратная связь. Нам важен Ваш опыт использования нашей продукции, поэтому мы запускаем проект, в котором каждый, кто купил нашу вещь и готов дать честный отзыв, может стать тестестировщиком. С Вас честный отзыв, с нас возможность участвовать в создании новой коллекции и шанс первым попробовать новую эксклюзивную экипировку раньше всех.
          <Button className={styles.button} variant='negative' icon={false}>Отправить заявку</Button>
        </div>
        <img className={styles.image} src='/images/testers.png' alt='' />
      </div>
    </>
  } />;
};

export default Page;
