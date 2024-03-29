import React, { useContext, useEffect, useState } from "react";
import s from "./Filter.module.css";
import { Context } from "../..";
import Checkbox from "../UI/Checkbox/Checkbox";
import RangeSlider from "../Slider/Slider";
import { observer } from "mobx-react-lite";
import { fetchDevices } from "../../http/DeviceAPI";
import { Spinner } from "react-bootstrap";

const Filter = observer((props) => {
  const {device} = useContext(Context)
  const [loading, setLoading] = useState(true)
  
  let MIN;
  let MAX;

 
  console.log(device.max);
  
  
  const [value, setValue] = React.useState([device.min, device.max]);
  const [type, setType] = useState(null)
  const [brand, setBrand] = useState(null)

  const click = () =>{
    device.setSelectedType(type)
    device.setSelectedBrand(brand)
    fetchDevices(device.selectedType, device.selectedBrand).then(data => {
      let arr = []
      data.rows.map((dev)=>{
        console.log(dev, value[0], value[1]);
        if ((dev.price >= value[0] && dev.price <= value[1])){
          arr.push(dev)
        }
      })
      console.log(arr);
      device.setDevices(arr)
      device.setTotalCount(data.count)
  })
  }

  
  return (
    <div className={s.wrapper}>
      <div className={s.checkboxes}>
        <div className={s.title}>Тип</div>
        {device.types.map(name =>
          <Checkbox name={name.name} setType={setType} id = {name.id} key = {name.id}/>
        )}
      </div>
      <div className={s.priceFilt}>
        <div className={s.title}>Цена</div>
        <RangeSlider MIN = {device.min} MAX = {device.max} value ={value} setValue={setValue}/>
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
          <Checkbox name={name.name} setType={setBrand} id={name.id} key = {name.id}/>
        )}
      </div>
      <button className={s.approve} onClick={click}>
        <span>Применить</span>
      </button>
    </div>
  );
});


export default Filter;