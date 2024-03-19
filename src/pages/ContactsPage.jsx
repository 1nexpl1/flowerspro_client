import React from "react";
import Title from "../components/UI/Title/Title";
import Contacts from "../components/Contacts/Contacts";

const ContactsPage = () => {
  return (
    <div className="contactsWrapper">
      <Title>Контакты</Title>
      <div className="subTitleContacts">Свяжитесь с нами удобным способом</div>
      <Contacts />
    </div>
  );
};

export default ContactsPage;
