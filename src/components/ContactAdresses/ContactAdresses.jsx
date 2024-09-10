import React from 'react'
import s from './ContactAdresses.module.css'
import sekb from '../../images/salonekb.jpg'
import svp from '../../images/salonvp.jpg'
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
const ContactAdresses = () => {
  return (
    <div className={s.mainWrapper}>
    <div className={s.wrapper}>
      <div className={s.itemWrapper}>
        <img className={s.photo} src={sekb} alt="" />
        <div className={s.textWrapper}>
        <div className={s.title}>Екатеринбург</div>
        <div className={s.addres}>
        <FaMapMarkerAlt />
        <div className={s.text}>г.Екатеринбург, улица Большакова, дом 143</div>
        </div>
        <div className={s.number}>
        <FaPhone />
        <FaWhatsapp />
        <div className={s.text}>+7(912)66-44-689</div>
        </div>
        </div>
      </div>
      <div className={s.itemWrapper}>
        <img className={s.photo} src={svp} alt="" />
        <div className={s.textWrapper}>
        <div className={s.title}>Верхняя Пышма</div>
        <div className={s.addres}>
        <FaMapMarkerAlt />
        <div className={s.text}>г.Верхняя пышма, улица Петрова, дом 13А</div>
        </div>
        <div className={s.number}>
        <FaPhone />
        <FaWhatsapp />
        <div className={s.text}>+7(912)66-44-096</div>
        </div>
        </div>
      </div>
    </div>
      <div className={s.Time}>
        Ежедневно с 9:00 до 21:00
      </div>
    </div>
  )
}

export default ContactAdresses