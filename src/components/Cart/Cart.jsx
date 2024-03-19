import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import CartItem from "../CartItem/CartItem";
import s from "./Cart.module.css";
const Cart = (props) => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <div className={s.wrapper}>
      <button className={s.buttonBack} onClick={props.toggle}>
        <IoIosArrowBack className={s.buttonBackIcon} />
        <div className={s.buttonBackText}>Назад</div>
      </button>
      <h1 className={s.title}>Корзина</h1>
      <div className={s.address}>
        <input
          className={s.addressInput}
          type="text"
          placeholder="Введите адрес доставки"
        />
        <div className={s.checkboxes}>
          <label className={s.checkbox}>
            <input
              className={s.checkSquare}
              type="checkbox"
              checked={checked1}
              onClick={() => setChecked1(!checked1)}
            />
            Уточнить у получателя
          </label>
          <label className={s.checkbox}>
            <input
              className={s.checkSquare}
              type="checkbox"
              checked={checked2}
              onClick={() => setChecked2(!checked2)}
            />
            Забрать самому
          </label>
        </div>
      </div>
      <div className={s.titleCartItems}>Товары в корзине</div>
      <div className={s.items}>
        {props.items.map((arr) => (
          <CartItem
            deleteItem={props.deleteItem}
            id={arr.id}
            name={arr.name}
            price={arr.price}
            count={arr.count}
            img = {arr.img}
            sum={props.sum}
            setSum = {props.setSum}
          />
        ))}
      </div>
      <div className={s.line}></div>
      <div className={s.sum}>
        Сумма: <div className={s.num}>{props.sum}₽</div>
      </div>
      <div className={s.payment}>
        <button className={s.paymentBut}>
          <span>Перейти к оплате</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
