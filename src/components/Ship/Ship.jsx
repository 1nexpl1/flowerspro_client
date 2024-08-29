import React from "react";
import s from "./Ship.module.css";
const Ship = () => {
  return (
    <div className={s.shipWrapper}>
      <div className={s.block}>
        <div className={s.title}>Доставка в день заказа</div>
        <div className={s.desc}>
          Оформить доставку на текущий день можно ежедневно, с 09 до 21 ч.
        </div>
      </div>
      <div className={s.block}>
        <div className={s.title}>Точно во время</div>
        <div className={s.desc}>
          Время определяется с точностью до 20 минут.
        </div>
      </div>
      <div className={s.block}>
        <div className={s.title}>Самовывоз</div>
        <div className={s.desc}>
          Возможно осуществить по адресу: Петрова 13А или Большакова 143. Забрать
          самостоятельно можно заранее оформленный заказ.
        </div>
      </div>
    </div>
  );
};

export default Ship;
