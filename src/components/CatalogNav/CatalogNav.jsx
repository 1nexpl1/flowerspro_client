import React from "react";
import { Link } from "react-router-dom";
import s from "./CatalogNav.module.css";
const CatalogNav = () => {
  const categories = [
    "Смотреть всё",
    "Новинки",
    "8 марта",
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
      {categories.map((e) => (
        <Link className={s.link} to="/catalog">
          <div className={s.text}>{e}</div>
        </Link>
      ))}
    </div>
  );
};

export default CatalogNav;
