import React from "react";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { PiTelegramLogoThin } from "react-icons/pi";
import { PiWhatsappLogoLight } from "react-icons/pi";
import s from './Contacts.module.css'
const Contacts = () => {
  return (
    <div className={s.contWrapper}>
      <a href="mailto:buketflowerspro@mail.ru" className={s.item}>
        <CiMail className={s.logo} />
        <div className={s.name}>Mail</div>
      </a>
      <a href="tel:8-912-66-44-689"  className={s.item}>
        <CiPhone className={s.logo} />
        <div className={s.name}>Позвонить</div>
      </a>
      <a href="https://t.me/flowerspro_vp" className={s.item}>
        <PiTelegramLogoThin className={s.logo} />
        <div className={s.name}>Telegram</div>
      </a>
      <a href="https://api.whatsapp.com/send/?phone=79126644689&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9F%D0%B8%D1%88%D1%83+%D0%B8%D0%B7+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F+2%D0%93%D0%98%D0%A1.%0A%0A&type=phone_number&app_absent=0" className={s.item}>
        <PiWhatsappLogoLight className={s.logo} />
        <div className={s.name}>WhatsApp</div>
      </a>
    </div>
  );
};

export default Contacts;
