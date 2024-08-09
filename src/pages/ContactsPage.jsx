import React from "react";
import Title from "../components/UI/Title/Title";
import Contacts from "../components/Contacts/Contacts";
import HoverContact from "../components/HoverContact/HoverContact";
import MapYandex from "../components/MapYandex/MapYandex";
import UrBlock from "../components/UrBlock/UrBlock";
import { motion, useIsPresent, useSpring } from "framer-motion";

const ContactsPage = () => {
  const isPresent = useIsPresent()

  return (
    <div className="contactsWrapper">
      <Title>Контакты</Title>
      <div className="subTitleContacts">
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
        >Где мы находимся</motion.div>
      </div>
      <div className="contactsMap">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}>
          <MapYandex />
        </motion.div>
      </div>
      <div className="subTitleContacts">
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
        >Свяжитесь с нами удобным способом</motion.div>
      </div>
      <div className="contactsMap">
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}>
          <Contacts />
        </motion.div>
      </div>
      <div className="subTitleContacts">
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
        >Юридические данные</motion.div></div>
      <UrBlock />
      <HoverContact />
    </div>
  );
};

export default ContactsPage;
