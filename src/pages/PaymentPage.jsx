import React from "react";
import Title from "../components/UI/Title/Title";
import Pay from "../components/Pay/Pay";
import HoverContact from "../components/HoverContact/HoverContact";
import photo from '../images/PayPhot.png'
import { motion } from 'framer-motion'

const PaymentPage = () => {
  return (
    <div className="paymentWrapper">
      <Title>Оплата</Title>
      <div className="paymentContent">
        <div>
          <div
            className="subTitlePayment">
            <motion.h3
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.5 }}>
              Как происходит оплата?
            </motion.h3>
          </div>

          <div className="blocksPaymentWrapper">
            <div className="imageWrapperPayment">
              <motion.img
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={photo}
                alt=""
                className="imagePayment"
              />
            </div>
            <motion.div className="blocksPayment"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.5 }}>
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
            </motion.div>
          </div>
            <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            >
              <div className="subTitlePayment">Гарантии честности</div>
              <Pay />
            </motion.div>
        </div>
      </div>
      <HoverContact />
    </div>
  );
};

export default PaymentPage;
