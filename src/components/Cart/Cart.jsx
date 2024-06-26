import React, { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import CartItem from "../CartItem/CartItem";
import s from "./Cart.module.css";
import { createOrder } from "../../http/OrderAPI";
import { Context } from "../..";
import file from '../../files/oferta.docx'
import md5 from 'md5'
import { GoToPay } from "../../http/pay";
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
const Cart = (props) => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [adress, setAdress] = useState(null);
  const [name, setName] = useState(null)
  const [number, setNumber] = useState('')
  const { user } = useContext(Context)
  let jsonItems = JSON.stringify(props.items)
  const addOrder = () => {
    if (validatePhoneNumber(number)) {
      if (number && name && adress && props.items) {   
        const formData = new FormData()
        formData.append('adress', adress)
        formData.append('name', name)
        formData.append('number', number)
        formData.append('value', props.sum)
        formData.append('status', 'подтверждение оплаты')
        formData.append('items', jsonItems)
        formData.append('userId', user.user.id)
        createOrder(formData).then(data => {
          props.toggle()   
          let strok = `https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=flowers-pro-vp.ru&OutSum=${props.sum}&SignatureValue=${md5(`flowers-pro-vp.ru:${props.sum}::Theteda123-45`)}`
          window.location.href = strok
        })
      } else {
        alert('Не все поля заполнены')
        return false
      }
    } else {
      alert('Не верный номер телефона')
      return false
    }

  }
  function validatePhoneNumber(input) {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return regex.test(input);
  }

  const GoToAuth = () =>{
    props.toggleAuth()
    props.toggle()
  }
  console.log(adress);
  return (
    <div className={s.wrapper}>
      <button className={s.buttonBack} onClick={props.toggle}>
        <IoIosArrowBack className={s.buttonBackIcon} />
        <div className={s.buttonBackText}>Назад</div>
      </button>
      {user.isAuth ? (
        <>
          <h1 className={s.title}>Корзина</h1>
          <div className={s.address}>
            <AddressSuggestions 
              token="650a43e28bfdfec31e9f3b18d7211dcf9c542cfe" 
              inputProps = {{className: s.addressInput, placeholder:"Введите адрес доставки"}} 
              value={adress}
              onChange={setAdress}
              containerClassName={s.addressContainer}
              suggestionsClassName = {s.addressHint}
              suggestionClassName = {s.addressOneHint}
            />
            <input
              className={s.addressInput}
              type="text"
              placeholder="Введите номер телефона"
              value={number}
              onChange={e => setNumber(e.target.value)}
            />
            <input
              className={s.addressInput}
              type="text"
              placeholder="Введите имя получателя"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <div className={s.checkboxes}>
              <label className={s.checkbox}>
                <input
                  className={s.checkSquare}
                  type="checkbox"
                  checked={checked2}
                  onClick={() => setChecked2(!checked2)}
                />
                Согласен с договором оферты
              </label>
            </div>
          </div>
          {props.sum == 0 ?
            <div className={s.titleCartItems}>Корзина пуста</div>
            :
            <>
              <div className={s.titleCartItems}>Товары в корзине</div>
              <div className={s.items}>
                {props.items.map((arr) => (
                  <CartItem
                    deleteItem={props.deleteItem}
                    id={arr.id}
                    name={arr.name}
                    price={arr.price}
                    count={arr.count}
                    img={arr.img}
                    sum={props.sum}
                    setSum={props.setSum}
                  />
                ))}
              </div>
              <div className={s.line}></div>
              <div className={s.sum}>
                Сумма: <div className={s.num}>{props.sum}₽</div>
              </div>
              <div className={s.payment}>
                {validatePhoneNumber(number) && name && adress && props.items ? (
                    <button className={s.paymentBut} onClick={addOrder}>
                      <span>Перейти к оплате</span>
                    </button>
                ) : (
                  <button className={s.paymentBut}>
                    <span>Перейти к оплате</span>
                  </button>
                )}
              </div>
              <a className={s.file} href={file} download>Договор оферты</a>
            </>

          }
        </>
      ) : (
        <>       
        <div style={{marginTop:'70px'}} className={s.titleCartItems}>Вы не авторизованы</div>
        <button className={s.paymentBut} onClick={GoToAuth}>Авторизоваться</button>
        </>
      )}


    </div >
  );
};

export default Cart;
