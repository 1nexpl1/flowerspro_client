import React, { useContext, useState } from 'react'
import s from './Registration.module.css'
import { IoIosArrowBack } from 'react-icons/io';
import { registration } from '../../http/userAPI';
import { Context } from '../..';
const Registration = (props) => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [password1, setPassword1] = useState('')
  const { user } = useContext(Context)
  const click = async () => {
    if (validatePhoneNumber(email)) {
      if (password === password1) {
        try {
          let data = await registration(name, email, password);
          console.log(data);
          user.setIsAuth(true)
          props.toggle()
        } catch (e) {
          alert(e.response.data.message)
        }
      } else {
        alert('Пароли не совпадают')
      } 
    } else {
      alert('Некорректный номер телефона')
    }

  }
  function validateEmail(email) {
    let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }
  function validatePhoneNumber(input) {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return regex.test(input);
  }

  return (
    <div className={s.wrapper}>
      <button className={s.buttonBack} onClick={props.toggle}>
        <IoIosArrowBack className={s.buttonBackIcon} />
        <div className={s.buttonBackText}>Назад</div>
      </button>

      <h1 className={s.title}>Регистрация</h1>
      <div className={s.reg}>
        <div className={s.inputs}>
          <input className={s.addressInput} type="text" placeholder="Имя" value={name} onChange={e => setName(e.target.value)}/>
          <input className={s.addressInput} type="text" placeholder="Номер телефона" value={email} onChange={e => setEmail(e.target.value)} />
          <input className={s.addressInput} type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} />
          <input
            className={s.addressInput}
            type="password"
            placeholder="Повторите пароль"
            value={password1}
            onChange={e => setPassword1(e.target.value)}
          />
        </div>
        <div className={s.checkboxes}>
          <label className={s.checkbox}>
            <input
              type="checkbox"
              checked={checked1}
              onChange={() => setChecked1(!checked1)}
            />
            <i></i>
            Отправлять мне последние предложения и рекомендации
          </label>
          <label className={s.checkbox}>
            <input
              className={s.checkbox}
              type="checkbox"
              checked={checked2}
              onChange={() => setChecked2(!checked2)}
            />
            <i></i>Я принимаю Политику конфиденциальности и Правила
            использования сайта FlowersPro.
          </label>
        </div>
        <div className={s.register}>
          <button className={s.registerBut} onClick={click}>Зарегистрироваться</button>
        </div>
        <div className={s.change}>
          У меня уже есть аккаунт <span onClick={() => { props.setIsAuth(false) }}>Войти</span>
        </div>
      </div>
    </div>
  );
}

export default Registration