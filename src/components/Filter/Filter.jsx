import React, { useContext, useEffect, useState } from "react";
import s from "./Filter.module.css";
import { Context } from "../..";
import Checkbox from "../UI/Checkbox/Checkbox";
import RangeSlider from "../Slider/Slider";
import { observer } from "mobx-react-lite";
import { fetchDevices, fetchOneDevice } from "../../http/DeviceAPI";
import { Spinner } from "react-bootstrap";
import { FaBullseye } from "react-icons/fa";

const Filter = observer((props) => {
  const { device } = useContext(Context)
  const [value, setValue] = React.useState([device.min, device.max]);
  const [type, setType] = useState(null)
  const [brand, setBrand] = useState(null)
  const [flower, setFlower] = useState(null)



  useEffect(() => {
    device.devices.map((e) => {
      fetchOneDevice(e.id).then(data => {
        if (data.info) {
          data.info.map((e) => {
            if (e.title === 'Состав' || e.title === 'Состав Букета') {
              let res = e.description.split(', ')
              let arr2 = []
              res.map((el) => {
                if (el !== ''){
                  arr2.push(el.split(' -')[0])
                }
              })
              let res2 = [...device.flowers, ...arr2]
              let uniqRes = [...new Set(res2)]
              device.setFlowers(uniqRes)
            }
          })
        }
      })
    })
  }, [])

  

  return (
    <div className={s.wrapper}>
      <div className={s.checkboxes}>
        <div className={s.title}>Тип</div>
        {device.types.map(name =>
          <Checkbox name={name.name} setType={setType} id={name.id} key={name.id} />
        )}
      </div>
      <div className={s.priceFilt}>
        <div className={s.title}>Цена</div>
        <RangeSlider MIN={device.min} MAX={device.max} value={value} setValue={setValue} />
        <div className={s.inputs}>
          <div className={s.input}>
            <span>от</span>
            <input type="text" name="" id="" value={value[0]} onChange={(e) => setValue([e.target.value, value[1]])} />
          </div>
          <div className={s.input}>
            <span>до</span>
            <input type="text" name="" id="" value={value[1]} onChange={(e) => setValue([value[0], e.target.value])} />
          </div>
        </div>
      </div>

      <div className={s.checkboxes}>
        <div className={s.title}>Упаковка</div>
        {device.brands.map(name =>
          <Checkbox name={name.name} setType={setBrand} id={name.id} key={name.id} />
        )}
      </div>
      <div className={s.checkboxes}>
        <div className={s.title}>Цветы</div>
        {device.flowers.map(name =>
          <Checkbox name={name} setType={setFlower} />
        )}
      </div>
      <button className={s.approve} onClick={
        ()=>props.click(type, brand, flower, value, setType, setBrand)
      }>
        <span>Применить</span>
      </button>
    </div>
  );
});


export default Filter;