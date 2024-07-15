import { FC } from 'react';
import Article from '@/components/Article/Article';

const Page: FC = () => {
  return <Article breadсrumbs={[{ name: 'Помощь', path: '/help' }, { name: 'Условия доставки', path: '/delivery' }]} title='Условия доставки' content={
    <>
      Доставка по России:
      При оформлении заказа обязательно укажите адрес и свой номер телефона.<br />
      До отправки вашего заказа вы можете в любое время изменить адрес доставки в вашем заказе, предварительно согласовав с представителем интернет-магазина.<br />
      После того, как ваш заказ будет отправлен, мы сообщим вам номер накладной, с помощью которого вы сможете самостоятельно следить за его передвижением на сайте:<br />
      - Отслеживание отправлений СДЭК<br />
      - Отслеживание отправлений EMS Почта России<br />
      - Отслеживание отправлений КСЕ(курьер сервис экспресс)<br />
      - Отслеживание отправлений Байкал Сервис<br />
      С адресами офисов и складов курьерских компаний можно ознакомиться на их сайтах.
      <br />
      <br />
      - Бесплатная доставка
      <br />
      <br />
      Если сумма вашего заказа превышает 20000 рублей, то доставка по территории РФ осуществляется бесплатно.<br />
      Осуществляется через сервисы доставки: КСЕ, СДЭК, Почта России, Байкал Сервис или др.<br />
      Срок доставки от 5 до 20 дней (в зависимости от удаленности региона) с момента передачи заказа курьерской службе, и в зависимости от изменяющихся условий доставки транспортной компании.
      <br />
      <br />
      - Платная доставка
      <br />
      <br />
      Срочная доставка или доставка заказа на сумму менее 20 000 рублей, согласуется дополнительно с менеджером в момент оформления заказа. или при оформлении заявки на сайте пожалуйста укажите комментарий, что вам необходима срочная доставка. СДЭК, КСЕ, Байкал Сервис, EMS. Срок доставки от 3 до 14 дней (в зависимости от удаленности региона или иных условий транспортной компании) с момента передачи заказа курьерской службе.<br />
      Вы можете заказать доставку до вашей квартиры, офиса или до склада выбранной вами транспортной компании.
      <br />
      <br />
      Доставка за рубеж (стоимость согласуется дополнительно):<br />
      Доставка заказов за рубеж осуществляется курьерской службой EMS. Срок доставки составляет от 15 до 30 дней с момента передачи заказа курьерской службе, в зависимости от удаленности региона.
      <br />
      <br />
      Стоимость доставки по России и за рубеж:
      <br />
      <br />
      Платная доставка заказа оплачивается покупателем отдельно, стоимость доставки зависит от тарифов транспортных компаний.<br />
      Примерная стоимость доставки одной куртки по России, можно посмотреть самостоятельно на сайте курьерской компании, либо уточнить у нашего менеджера.<br />
      Стоимость зависит от города и веса изделия и может незначительно отличаться в зависимости от модели изделия. Наше самое «тяжелое» изделие весит 2,5 кг.
      <br />
      <br />
      Ориентировочные сроки доставки через СДЭК, КСЕ -2-3 дня по Москве и до 12 дней по России (в зависимости от дальности региона).
    </>
  } />;
};

export default Page;
