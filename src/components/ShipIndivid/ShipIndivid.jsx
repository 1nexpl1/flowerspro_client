import React from "react";
import s from "./ShipIndivid.module.css";
import photo1 from '../../images/individ.png'
const ShipIndivid = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.block}>
        <img className={s.image} src={photo1} alt="" />
        <div className={s.title}>Индивидуальный заказ цветов</div>
        <div className={s.descrip}>
          Не нашли то, что искали? Опишите свои пожелания, наши специалисты
          помогут рассчитать заказ.
        </div>
        <button className={s.button}>Подробнее</button>
      </div>
      <div className={s.block}>
        <img className={s.image} src="https://placehold.co/500x400" alt="" />
        <div className={s.title}>Букеты корпоративным клиентам</div>
        <div className={s.descrip}>
          Хотите сделать заказ для компании? Свяжитесь с нами или опишите
          задачу.
        </div>
        <button className={s.button}>Подробнее</button>
      </div>
    </div>
  );
};

export default ShipIndivid;