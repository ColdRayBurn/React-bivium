'use client';

import { FC, useEffect, useState } from 'react';

import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapDefaultMarker
} from 'ymap3-components';

import CDEKWidget from '@cdek-it/widget';

import Card from '@/components/ui/Card/Card';
import Input from '@/components/ui/Input/Input';
import RadioButton from '@/components/ui/RadioButton/RadioButton';
import InformationText from '@/components/ui/InformationText/InformationText';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import Button from '@/components/ui/Button/Button';

import { useAppSelector } from '@/redux/hooks';

import api from '@/api';
import { IOrder } from '@/models';

import styles from './Body.module.css';

interface Props {
  orderData: IOrder | null;
}

const Body: FC<Props> = ({ orderData }) => {
  const { phonenumber } = useAppSelector(selector => selector.user);
  const [deliveryType, setDeliveryType] = useState<'CDEK' | 'pickup'>('CDEK');
  const [isCDEKWidgetInitialied, setIsCDEKWidgetInitialied] = useState(false);

  useEffect(() => {
    if (isCDEKWidgetInitialied) {
      return;
    }

    new CDEKWidget({
      from: 'Москва',
      root: 'cdek-map',
      apiKey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY!,
      servicePath: new URL('service.php', process.env.NEXT_PUBLIC_URL!).toString(),
      defaultLocation: 'Москва'
    });

    setIsCDEKWidgetInitialied(true);
  }, [isCDEKWidgetInitialied]);

  const gotoPaymentHandler = () => {
    if (orderData === null) {
      return;
    }

    api
      .post('payment/', {
        json: {
          orderId: parseInt(orderData.orderId),
          orderPrice: parseInt(orderData.totalPrice)
        }
      })
      .json<{ response: { confirmation: { confirmation_url: string } } }>()
      .then(response => {
        location.replace(response.response.confirmation.confirmation_url);
      });
  };

  return (
    <div className={styles.wrapper}>
      <Card title={`Адрес ${deliveryType === 'CDEK' ? 'доставки' : 'офиса'}`}>
        <div id='cdek-map' className={styles.map} style={{ display: deliveryType === 'CDEK' ? '' : 'none' }}></div>
        {deliveryType === 'pickup' && (
          <div className={styles.map}>
            <YMapComponentsProvider apiKey={process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY!}>
              <YMap location={{ center: [37.840732, 55.684138], zoom: 16 }}>
                <YMapDefaultSchemeLayer />
                <YMapDefaultFeaturesLayer />
                <YMapDefaultMarker title='Привольная улица, 56' coordinates={[37.840732, 55.684138]} />
              </YMap>
            </YMapComponentsProvider>
          </div>
        )}
        <div className={styles.phonenumberForm}>
          <div className={styles.phonenumberFormWrapper}>
            <div className={styles.phonenumberFormTitle}>Номер телефона*</div>
            <Input
              className={styles.phonenumberFormControl}
              placeholder='+7 ___ ___ __ __'
              defaultValue={phonenumber ?? undefined}
            />
            <Button className={styles.phonenumberFormButton} variant='negative' icon={false} type='button'>
              Сохранить и продолжить
            </Button>
            <div className={styles.phonenumberFormDescription}>*поля обязательные для заполнения</div>
          </div>
          <div className={styles.phonenumberFormDeliveryType}>
            <RadioButton
              text='Доставка СДЕК'
              name='deliveryType'
              value='CDEK'
              defaultChecked
              onChange={event => event.target.checked && setDeliveryType('CDEK')}
            />
            <RadioButton
              text='Самовывоз'
              name='deliveryType'
              value='pickup'
              onChange={event => event.target.checked && setDeliveryType('pickup')}
            />
            {deliveryType === 'CDEK' && (
              <InformationText text='Если Вам не подходит ни один из предложеных способов доставки, пожалуйста, свяжитесь с нами.' />
            )}
            {deliveryType === 'pickup' && (
              <>
                <InformationText text='Самовывоз возможен на следующий рабочий день по адресу: ул. Привольная, 56 с 9:00 до 18:00, кроме субботы и воскресенья' />
                <InformationText text='Если Вам не подходит ни один из предложеных способов доставки, пожалуйста, свяжитесь с нами.' />
              </>
            )}
          </div>
          <Button className={styles.paymentButton} variant='negative' icon={false} onClick={gotoPaymentHandler}>
            Перейти к оплате
          </Button>
        </div>
      </Card>
      <Card title='Откуда Вы узнали о нашем бренде?'>
        <Dropdown
          className={styles.surveyDropdown}
          items={[
            { name: 'Соцсети', value: 'social' },
            { name: 'Из интернета', value: 'internet' },
            { name: 'От знакомых', value: 'friends' },
            { name: 'Из СМИ', value: 'media' },
            { name: 'От амбассадора', value: 'ambassador' },
            { name: 'Я из людей BIVIUM', value: 'bivium', selected: true }
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
