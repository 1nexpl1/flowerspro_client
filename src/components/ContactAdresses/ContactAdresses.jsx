import React from 'react'
import s from './ContactAdresses.module.css'
const ContactAdresses = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.title}>Екатеринбург</div>
        <div className={s.subtitle}>Номер телефона</div>
        <div className={s.text}>+7(912)66-44-689</div>
        <div className={s.subtitle}>Адрес</div>
        <div className={s.text}>г.Екатеринбург, улица Большакова, дом 143</div>
        <div className={s.subtitle}>Время Работы</div>
        <div className={s.text}>Ежедневно с 9 до 21</div>
        <div className={s.title}>Верхняя Пышма</div>
        <div className={s.subtitle}>Адрес</div>
        <div className={s.text}>г.Верхняя пышма, улица Петрова, дом 13А</div>
        <div className={s.subtitle}>Время Работы</div>
        <div className={s.text}>Ежедневно с 9 до 21</div>
        <div className={s.subtitle}>Номер телефона</div>
        <div className={s.text}>+7(912)66-44-096</div>
    </div>
  )
}

export default ContactAdresses