import React, { useContext, useEffect, useRef, useState } from "react";
import s from "./Filter.module.css";
import { Context } from "../..";
import Checkbox from "../UI/Checkbox/Checkbox";
import RangeSlider from "../Slider/Slider";
import { observer } from "mobx-react-lite";
import { fetchDevices, fetchOneDevice } from "../../http/DeviceAPI";
import { motion } from 'framer-motion'

const Filter = observer((props) => {
  const { device } = useContext(Context)
  const [value, setValue] = React.useState([device.min, device.max]);
  const [type, setType] = useState(null)
  const [brand, setBrand] = useState(null)
  const [flower, setFlower] = useState(null)
  const [clickApply, setClickApply] = useState(0)
  const whiteList = ['Альстромерия', 'Роза', 'Хризантема', 'Гвоздика', 'Лилия', 'Пион', 'Эустома', 'Гипсофила', 'Цимбидиум', 'Гербера', 'Гортензия']

  useEffect(() => {
    device.devices.map((e) => {
      fetchOneDevice(e.id).then(data => {
        if (data.info) {
          data.info.map((e) => {
            if (e.title === 'Состав' || e.title === 'Состав Букета') {
              let res = e.description.split(', ')
              let arr2 = []
              res.map((el) => {
                if (el !== '') {
                  let upperLetterElement = el[0].toUpperCase() + el.split(' ')[0].slice(1)
                  if (whiteList.includes(upperLetterElement)) {
                    arr2.push(upperLetterElement)
                  }
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

  const lastClickFunk = () => {
    props.click(type, brand, flower, value, setType, setBrand, setFlower)
    setClickApply(clickApply + 1)
  }





  return (
    <div className={s.wrapper}>
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
        <div className={s.checkboxes}>
          <div className={s.title}>Тип</div>
          {device.types.map(name =>
            <Checkbox name={name.name} setType={setType} id={name.id} key={name.id} clickApply={clickApply} />
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
            <Checkbox name={name.name} setType={setBrand} id={name.id} key={name.id} clickApply={clickApply} />
          )}
        </div>
        <div className={s.checkboxes}>
          <div className={s.title}>Цветы</div>
          {device.flowers.map(name =>
            <Checkbox name={name} setType={setFlower} clickApply={clickApply} />
          )}
        </div>
        <button className={s.approve} onClick={lastClickFunk}>
          <span>Применить</span>
        </button>
      </motion.div>
    </div>
  );
});


export default Filter;