import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import s from "./CatalogNav.module.css";
import { Context } from "../..";
import photo from '../../images/preview.jpg'
import { fetchDevices } from "../../http/DeviceAPI";
const CatalogNav = () => {
  const { device } = useContext(Context)
  let click = (id) => {
  }

  return (
    <div className={s.wrapper}>

      <div className={s.column}>
        {device.types.map((e) => (
          <Link className={s.link} to="/catalog">
            <div onClick={() => {
              device.setSelectedType(e.id)
              fetchDevices(device.selectedType)
              console.log(fetchDevices(device.selectedType, null));
            }} className={s.text}>{e.name}</div>
          </Link>
        ))}
        <Link className={s.link} to="/catalog">
          <div className={s.text}>Смотреть все</div>
        </Link>
      </div>
      <div className={s.photo}>
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default CatalogNav;
