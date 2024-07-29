'use client';

import { FC } from 'react';
import classNames from 'classnames';

import Card from '@/components/ui/Card/Card';
import Input from '@/components/ui/Input/Input';
import TextArea from '@/components/ui/TextArea/TextArea';
import Checkbox from '@/components/ui/Checkbox/Checkbox';
import RadioButton from '@/components/ui/RadioButton/RadioButton';
import InformationText from '@/components/ui/InformationText/InformationText';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import Button from '@/components/ui/Button/Button';

import styles from './Body.module.css';
const Body: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Card title='Адрес доставки'>
        <div className={styles.addressForm}>
          <Input
            className={classNames(styles.addressFormControl, styles.addressFormControl_locality)}
            placeholder='Населённый пункт*'
          />
          <Input className={styles.addressFormControl} placeholder='Улица*' />
          <Input
            className={classNames(styles.addressFormControl, styles.addressFormControl_house)}
            placeholder='Дом*'
          />
          <Input
            className={classNames(styles.addressFormControl, styles.addressFormControl_apartment)}
            placeholder='Квартира'
          />
          <TextArea
            className={classNames(styles.addressFormControl, styles.addressFormControl_comment)}
            placeholder='Комментарий к заказу'
            rows={4}
          />
          <Checkbox
            className={classNames(styles.addressFormControl, styles.addressFormControl_saveAddress)}
            text='Добавить адрес в профиль'
          />
        </div>
        <div className={styles.phonenumberForm}>
          <div className={styles.phonenumberFormWrapper}>
            <div className={styles.phonenumberFormTitle}>Номер телефона*</div>
            <Input className={styles.phonenumberFormControl} placeholder='+7 ___ ___ __ __' />
            <Button className={styles.phonenumberFormButton} variant='negative' icon={false} type='button'>
              Сохранить и продолжить
            </Button>
            <div className={styles.phonenumberFormDescription}>*поля обязательные для заполнения</div>
          </div>
          <div className={styles.phonenumberFormDeliveryType}>
            <RadioButton text='Курьерская доставка' name='deliveryType' value='courier' />
            <RadioButton text='До пункта доставки' name='deliveryType' value='point' />
            <RadioButton text='Срочная доставка' name='deliveryType' value='express' />
            <InformationText text='Стоимость срочной доставки будет добавлена к стоимости заказа' />
          </div>
        </div>
      </Card>
      <Card title='Откуда Вы узнали о нашем бренде?'>
        <Dropdown
          className={styles.surveyDropdown}
          items={[
            { name: '1', value: 1 },
            { name: '2', value: 2 },
            { name: '3', value: 3 }
          ]}
          onSelectCallback={console.log}
        />
        <InformationText className={styles.surveyInformationText} text='Опрос конфиденциален' />
        <Button className={styles.surveyButton} variant='negative' icon={false} type='button'>
          Сохранить
        </Button>
      </Card>
    </div>
  );
};

export default Body;
