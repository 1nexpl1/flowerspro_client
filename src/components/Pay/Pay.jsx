import React from "react";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GrSecure } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import s from "./Pay.module.css";
const Pay = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.block}>
        <RiSecurePaymentFill className={s.icon} />
        <div className={s.title}>Конфиденциальность</div>
        <div className={s.descrip}>
          Предоставляемая Вами персональная информация (имя, адрес, телефон,
          e-mail, номер кредитной карты) является конфиденциальной и не подлежит
          разглашению. Данные вашей кредитной карты передаются в зашифрованном
          виде.
        </div>
      </div>
      <div className={s.block}>
        <GrSecure className={s.icon} />
        <div className={s.title}>Безопасные платежи</div>
        <div className={s.descrip}>
          Безопасность обработки Интернет-платежей по пластиковым картам
          гарантирует банк-эквайер. Все операции с картами происходят в
          соответствии с требованиями VISA International, MasterCard и других
          платежных систем.
        </div>
      </div>
      <div className={s.block}>
        <MdOutlineSupportAgent className={s.icon} />
        <div className={s.title}>Техническая поддержка</div>
        <div className={s.descrip}>
          В случае возникновения вопросов по поводу конфиденциальности операций
          с платёжными картами и предоставляемой Вами информации вы можете
          связаться со службой технической поддержки банка.
        </div>
      </div>
    </div>
  );
};

export default Pay;
