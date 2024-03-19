import React, { useContext, useState } from 'react'
import s from './Registration.module.css'
import { IoIosArrowBack } from 'react-icons/io';
import { registration } from '../../http/userAPI';
import { Context } from '../..';
const Registration = (props) => {
    const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user} = useContext(Context)
  const click = async () => {
    try {
        let data = await registration(email, password);
        console.log(data);
        user.setIsAuth(true)
    } catch (e) {
        alert(e.response.data.message)
    }

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
          <input className={s.addressInput} type="text" placeholder="Имя" />
          <input className={s.addressInput} type="text" placeholder="e-mail" value={email} onChange={e => setEmail(e.target.value)}/>
          <input className={s.addressInput} type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)}/>
          <input
            className={s.addressInput}
            type="password"
            placeholder="Повторите пароль"
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
        У меня уже есть аккаунт <span onClick={() =>{props.setIsAuth(false)}}>Войти</span>
        </div>
      </div>
    </div>
  );
}

export default Registration