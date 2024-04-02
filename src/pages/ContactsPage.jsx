import React from "react";
import Title from "../components/UI/Title/Title";
import Contacts from "../components/Contacts/Contacts";
import HoverContact from "../components/HoverContact/HoverContact";
import MapYandex from "../components/MapYandex/MapYandex";

const ContactsPage = () => {

  return (
    <div className="contactsWrapper">
      <Title>Контакты</Title>
      <div className="subTitleContacts">Где мы находимся</div>
      <MapYandex />
      <div className="subTitleContacts">Свяжитесь с нами удобным способом</div>
      <Contacts />
      <HoverContact/>
    </div>
  );
};

export default ContactsPage;
