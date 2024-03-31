import React, { useContext } from "react";
import { Link } from "react-router-dom";
import s from "./CatalogNav.module.css";
import { Context } from "../..";
const CatalogNav = () => {
  const {device} = useContext(Context)
  const categories = [
    "Смотреть всё",
    "Новинки",
    "Букеты",
    "Монобукеты",
    "Композиции",
    "Корзины",
    "Мужские букеты",
    "Комнатные растения",
    "Аромосвечи",
  ];
  return (
    <div className={s.wrapper}>
      
      <div className={s.column}>  
      {categories.map((e) => (
        <Link className={s.link} to="/catalog">
          <div className={s.text}>{e}</div>
        </Link>
      ))}
      </div>
      <div className={s.photo}>
        <img src="https://placehold.co/175x175" alt="" />
      </div>
    </div>
  );
};

export default CatalogNav;
