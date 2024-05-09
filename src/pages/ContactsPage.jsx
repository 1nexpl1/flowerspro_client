import React from "react";
import Title from "../components/UI/Title/Title";
import Contacts from "../components/Contacts/Contacts";
import HoverContact from "../components/HoverContact/HoverContact";
import MapYandex from "../components/MapYandex/MapYandex";
import UrBlock from "../components/UrBlock/UrBlock";

const ContactsPage = () => {

  return (
    <div className="contactsWrapper">
      <Title>Контакты</Title>
      <div className="subTitleContacts">Где мы находимся</div>
      <MapYandex />
      <div className="subTitleContacts">Свяжитесь с нами удобным способом</div>
      <Contacts />    
      <div className="subTitleContacts">Юридические данные</div>
      <UrBlock />
      <HoverContact/>
    </div>
  );
};

export default ContactsPage;
