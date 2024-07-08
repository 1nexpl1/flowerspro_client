import React, { useContext, useState } from 'react'
import s from './Login.module.css'
import { IoIosArrowBack } from 'react-icons/io'
import { login, registration } from '../../http/userAPI'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'
const Login = observer((props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user} = useContext(Context)
  const click = async () => {
    if (validateEmail(email) || validatePhoneNumber(email)) {
      try {
        let data = await login(email, password);
        user.setUser(user)
        user.setIsAuth(true)
        props.toggle()
    } catch (e) {
      if (e.response.data.message) {
        alert(e.response.data.message)
      }
    }
    } else {
      alert('Некорректный email или номер телефона')
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

    <h1 className={s.title}>Вход</h1>
    <div className={s.reg}>
      <div className={s.inputs}>
      <input className={s.addressInput} placeholder="e-mail или номер телефона" value={email} onChange={e => setEmail(e.target.value)}/>
          <input className={s.addressInput} type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)}/>
      </div>
      <div className={s.register}>
        <button className={s.registerBut} onClick={click}>Войти</button>
      </div>
      <div className={s.change}>
      У меня нет аккаунта <span onClick={() =>{props.setIsAuth(true)}}>Зарегистрироваться</span>
      </div>
    </div>
  </div>
  )
})

export default Login