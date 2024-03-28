import React, { useContext, useState } from "react";
import s from "./Filter.module.css";
import { Context } from "../..";
import Checkbox from "../UI/Checkbox/Checkbox";
import RangeSlider from "../Slider/Slider";
import { observer } from "mobx-react-lite";

const Filter = observer((props) => {
  const {device} = useContext(Context)
  let prices =[]
  device.devices.map((e)=>{
    prices.push(e.price)
  })
  const [value, setValue] = React.useState([Math.min(...prices), Math.max(...prices)]);
  const MIN = Math.min(...prices)
  const MAX = Math.max(...prices)
  const [type, setType] = useState(null)
  const [brand, setBrand] = useState(null)

  const click = () =>{
    device.setSelectedType(type)
    device.setSelectedBrand(brand)
    let arr = []
    device.devices.map((dev)=>{
      if (dev.price >= value[0] && dev.price <= value[1]){
        arr.push(dev)
      }
    })
    device.setDevices(arr)
  }
  return (
    <div className={s.wrapper}>
      <div className={s.checkboxes}>
        <div className={s.title}>Тип</div>
        {device.types.map(name =>
          <Checkbox name={name.name} setType={setType} id = {name.id}/>
        )}
      </div>
      <div className={s.priceFilt}>
        <div className={s.title}>Цена</div>
        <RangeSlider MIN = {MIN} MAX = {MAX} value ={value} setValue={setValue}/>
        <div className={s.inputs}>
          <div className={s.input}>
            <span>от</span>
            <input type="text" name="" id="" value={value[0]} onChange={(e)=>setValue([e.target.value, value[1]])}/>
          </div>
          <div className={s.input}>
            <span>до</span>
            <input type="text" name="" id="" value={value[1]} onChange={(e)=>setValue([value[0], e.target.value])}/>
          </div>
        </div>
      </div>
      
      <div className={s.checkboxes}>
        <div className={s.title}>Упаковка</div>
        {device.brands.map(name =>
          <Checkbox name={name.name} setType={setBrand} id={name.id}/>
        )}
      </div>
      <button className={s.approve} onClick={click}>
        <span>Применить</span>
      </button>
    </div>
  );
});

export default Filter;