import React from "react";
import Title from "../components/UI/Title/Title";
import Pay from "../components/Pay/Pay";
import HoverContact from "../components/HoverContact/HoverContact";
import photo from '../images/PayPhot.png'


const PaymentPage = () => {
  return (
    <div className="paymentWrapper">
      <Title>Оплата</Title>
      <div className="paymentContent">
        <div>
          <div className="subTitlePayment">Как происходит оплата?</div>

          <div className="blocksPaymentWrapper">
            <div className="imageWrapperPayment">
              <img
                src={photo}
                alt=""
                className="imagePayment"
              />
            </div>
            <div className="blocksPayment">
              <div className="blockPay">
                1. На странице авторизации потребуется ввести номер карты, имя
                владельца карты, срок действия карты, верификационный номер
                карты (CVV2 для VISA или CVC2 для MasterCard). Все необходимые
                данные пропечатаны на самой карте.
              </div>
              <div className="blockPay">
                2. Для оплаты Вы будете перенаправлены на страницу банка.
                Произвести оплату необходимо в течение 15 минут после перехода
                на страницу авторизации карточки. Транзакция может занять около
                40 секунд. Дождитесь завершения операции. Не нажимайте повторно
                кнопку «Заплатить».
              </div>
              <div className="blockPay">
                3. Платеж происходит в режиме реального времени и зачисляется в
                течение 15 минут. Для выбора оплаты товара с помощью банковской
                карты на соответствующей странице необходимо нажать кнопку
                «Оплата заказа банковской картой».
              </div>
            </div>
          </div>
          <div className="subTitlePayment">Гарантии честности</div>
          <Pay />
        </div>
      </div>
      <HoverContact />
    </div>
  );
};

export default PaymentPage;
