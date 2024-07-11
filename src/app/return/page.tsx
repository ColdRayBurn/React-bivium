import React from 'react';
import styles from "./Return.module.css";
import classes from "@/app/help/HelpSection.module.css";
import BackwardLink from "@/components/ui/BackwardLink/BackwardLink";
import DeliveryInformation from "@/components/ui/DeliveryInformation/DeliveryInformation";

const ReturnSection: React.FC = () => {
    return (
        <div className={styles.container}>
            <BackwardLink href='/help' text='Помощь / Возврат товара' className={classes.backwardLinkMargin}/>
            <h1 className={styles.title}>Возврат товара</h1>
            <div className={styles.description}>
                <div className={styles.paragraph}>Вы можете вернуть заказанный товар надлежащего качества в течение
                    14-ти дней с момента его получения, если товар не был в употреблении, сохранены его товарный вид,
                    оригинальная упаковка и ярлыки.
                </div>
                <div className={styles.paragraph}>Для осуществления возврата необходимо:</div>
                <div className={styles.paragraph}>Аккуратно упаковать товар в полной комплектации (товары, поставляемые
                    в комплекте, необходимо возвращать также в комплекте). При возврате товара необходимо иметь при себе
                    заполненное заявление на возврат.
                </div>
                <div className={styles.subtitle}>Курьерская служба</div>
                <div className={styles.paragraph}>(Для Москвы, Московской области, Санкт-Петербурга и Ленинградской
                    области)
                </div>
                <div className={styles.listItem}>Необходимо обратиться в службу поддержки клиентов по тел. 8 (800)
                    555-05-64. Сообщить номер заказа и причину возврата.
                </div>
                <div className={styles.listItem}>Согласовать с менеджером удобную дату и время приезда курьера.</div>
                <div className={styles.listItem}>Заполнить заявление о возврате и вложить его в заказ.</div>
                <div className={styles.listItem}>Аккуратно упаковать товар в полной комплектации (товары, поставляемые в
                    комплекте, необходимо возвращать также в комплекте)
                </div>
                <div className={styles.listItem}>Передать заказ курьеру</div>
                <div className={styles.subtitle}>Почта России:</div>
                <div className={styles.listItem}>Аккуратно упаковать товар в оригинальную упаковку в полной комплектации
                    (товары, поставляемые в комплекте, необходимо возвращать также в комплекте);
                </div>
                <div className={styles.listItem}>Заполнить заявление о возврате. Для этого позвоните по номеру 8 (800)
                    555-05-64 и наши специалисты отправят Вам заявление на возврат в электронном виде;
                </div>
                <div className={styles.listItem}>Приложить копию кассового чека, указать способ возврата денежных
                    средств (денежные средства направляются тем же способом, каким была осуществлена оплата заказа);
                </div>
                <div className={styles.listItem}>Выслать посылку почтой по адресу: 109431, г. Москва, ул. Привольная, д.
                    56, для ООО "ОЛКИДС" (BIVIUM)
                </div>
                <div className={styles.listItem}>После отправки возврата, просьба присылать трек-номер посылки, номер
                    заказа и ФИО на почту: <u>zakaz@bivium.ru</u>
                </div>
                <div className={styles.paragraph}>Возврат денежных средств осуществляется в течение 10 календарных дней
                    с момента поступления посылки на склад интернет-магазина на банковскую карту, с которой была
                    произведена оплата (только для заказов, оплаченных картой онлайн сразу после оформления), или на
                    реквизиты указанные в заявлении на возврат, для заказов, оплаченных при получении.
                </div>
                <div className={styles.paragraph}>Рекомендуем сохранять документы об отправке возврата до момента
                    получения денег обратно.
                </div>
                <div className={styles.paragraph}>При возврате товара надлежащего качества, клиенту возвращаются только
                    деньги за товар согласно цене в заказе. Стоимость доставки и расходы на обратную пересылку не
                    возмещаются.
                </div>
                <div className={styles.paragraph}>В случае возврата товара ненадлежащего качества клиенту возмещается
                    его полная стоимость, согласно цене в заказе. Затраты клиента на обратную пересылку товара
                    ненадлежащего качества возмещаются при наличии квитанции, подтверждающей расходы клиента. Для этого
                    клиенту необходимо выслать скан квитанции об оплате пересылки на адрес zakaz@bivium.ru
                </div>
                <div className={styles.paragraph}>Все процессы регламентированы законом РФ «О защите прав
                    потребителя».
                </div>
                <div className={styles.subtitle}>Замена товара:</div>
                <div className={styles.paragraph}>Замена Товара может быть осуществлена в случае наличия товара на
                    складе через возврат клиенту денежных средств за возвращенный товар и оформление клиентом
                    самостоятельно нового заказа на данный товар при условии, что товар имеется в наличии.
                </div>
            </div>
            <div className={styles.deliveryInformationContainer}>
                <DeliveryInformation/>
            </div>
        </div>
    );
};

export default ReturnSection;