import React from "react";
import Title from "../components/UI/Title/Title";
import Ship from "../components/Ship/Ship";
import ShipIndivid from "../components/ShipIndivid/ShipIndivid";
import HoverContact from "../components/HoverContact/HoverContact";
import { motion } from 'framer-motion'

const ShipPage = () => {
  return (
    <div className="shipWrapper">
      <Title>Доставка</Title>
      <div className="shipContent">
        <div className="subTitleShip">
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Доставка букетов по г. Екатеринбург и г. Верхняя Пышма
          </motion.div>
        </div>

        <div className="shipDescrip">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.5 }}>
            Доставка осуществляется ежедневно с 09:00 до 21:00 ч. в выбранный вами
            интервал.
            <p />
            <p />
            Компания Flowers Pro предлагает на выбор 3 вида интервала доставки:
            четырехчасовой, часовой и доставку к точному времени. Интервал
            доставки - это параметр точности доставки, временной промежуток
            ожидания, в который прибудет ваш заказ.
          </motion.div>
        </div>
        <div className="shipBaseInfo">
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}>
              
            <Ship />
          </motion.div>
        </div>
        <ShipIndivid />
      </div>
      <HoverContact />
    </div>
  );
};

export default ShipPage;