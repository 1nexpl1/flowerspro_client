import React from "react";
import s from "./ShipIndivid.module.css";
import photo1 from '../../images/IndPhot.png'
import photo2 from '../../images/KorPhot.png'
import {motion} from 'framer-motion'
const ShipIndivid = () => {
  return (
    <div className={s.wrapper}>
      <motion.div      
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={s.block}>
        <img className={s.image} src={photo1} alt="" />
        <div className={s.title}>Индивидуальный заказ цветов</div>
        <div className={s.descrip}>
          Не нашли то, что искали? Опишите свои пожелания, наши специалисты
          помогут рассчитать заказ.
        </div>
        <button className={s.button}>Подробнее</button>
      </motion.div>
      <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={s.block}>
        <img className={s.image} src={photo2} alt="" />
        <div className={s.title}>Букеты корпоративным клиентам</div>
        <div className={s.descrip}>
          Хотите сделать заказ для компании? Свяжитесь с нами или опишите
          задачу.
        </div>
        <button className={s.button}>Подробнее</button>
      </motion.div>
    </div>
  );
};

export default ShipIndivid;