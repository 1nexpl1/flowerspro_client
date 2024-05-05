import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import s from "./CatalogNav.module.css";
import { Context } from "../..";
import photo from '../../images/preview.jpg'
import { fetchDevices } from "../../http/DeviceAPI";
import { observer } from "mobx-react-lite";
const CatalogNav = observer((props) => {
  const { device } = useContext(Context)
  let [selectId, setSelectId] = useState()
  let func = (id) => {
    fetchDevices(id, null).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
      let prices =[]
      device.devices.map((e)=>{
      prices.push(e.price)
      })
      device.setMin(Math.min(...prices))
      device.setMax(Math.max(...prices))
    })
  }
  

  return (
    <div className={s.wrapper}>

      <div className={s.column}>
        {device.types.map((e) => (
          <Link onClick={func} className={s.link} to="/catalog">
            <div onClick={()=>func(e.id)} className={s.text}>{e.name}</div>
          </Link>
        ))}
        <Link className={s.link} to="/catalog">
          <div onClick={()=>func(null)} className={s.text}>Смотреть все</div>
        </Link>
      </div>
      <div className={s.photo}>
        <img src={photo} alt="" />
      </div>
    </div>
  );
});

export default CatalogNav;
