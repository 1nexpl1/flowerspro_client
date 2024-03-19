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
      <input className={s.addressInput} type="text" placeholder="e-mail" value={email} onChange={e => setEmail(e.target.value)}/>
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