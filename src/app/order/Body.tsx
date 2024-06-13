'use client';

import { FC } from 'react';

import Card from './Card';

import Dropdown from '@/components/ui/Dropdown/Dropdown';
import InformationText from '@/components/ui/InformationText/InformationText';
import Button from '@/components/ui/Button/Button';

import styles from './Body.module.css';

const Body: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Card title='Откуда Вы узнали о нашем бренде?'>
        <Dropdown className={styles.surveyDropdown} items={[{ name: '1', value: 1 }, { name: '2', value: 2 }, { name: '3', value: 3 }]} onSelectCallback={console.log} />
        <InformationText className={styles.surveyInformationText} text='Опрос конфиденциален' />
        <Button className={styles.surveyButton} variant='negative' icon={false}>Сохранить</Button>
      </Card>
    </div>
  );
};

export default Body;
