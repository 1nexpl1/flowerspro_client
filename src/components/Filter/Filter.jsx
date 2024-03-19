import React, { useContext, useState } from "react";
import Slider from "react-slider";
import s from "./Filter.module.css";
import { Context } from "../..";
import Checkbox from "../UI/Checkbox/Checkbox";

const MIN = 490;
const MAX = 11490;

const Filter = () => {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);
  const [checked9, setChecked9] = useState(false);
  const [checked10, setChecked10] = useState(false);
  const [values, setValues] = useState([MIN, MAX]);
  const {device} = useContext(Context)
  return (
    <div className={s.wrapper}>
      
      <div className={s.checkboxes}>
        
        <div className={s.title}>Цветы</div>
        
        
        <label className={s.checkbox}>
          <input
            className={s.checkSquare}
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span>Роза</span>
        </label>
        <label className={s.checkbox}>
          <input
            className={s.checkSquare}
            type="checkbox"
            checked={checked1}
            onChange={() => setChecked1(!checked1)}
          />
          <span>Пион</span>
        </label>
        <label className={s.checkbox}>
          <input
            className={s.checkSquare}
            type="checkbox"
            checked={checked2}
            onChange={() => setChecked2(!checked2)}
          />
          <span>Гортензия</span>
        </label>
        <label className={s.checkbox}>
          <input
            className={s.checkSquare}
            type="checkbox"
            checked={checked3}
            onChange={() => setChecked3(!checked3)}
          />
          <span>Гелиантус</span>
        </label>
        <label className={s.checkbox}>
          <input
            className={s.checkSquare}
            type="checkbox"
            checked={checked4}
            onChange={() => setChecked4(!checked4)}
          />
          <span>Лаванда</span>
        </label>
        <label className={s.checkbox}>
          <input
            className={s.checkSquare}
            type="checkbox"
            checked={checked5}
            onChange={() => setChecked5(!checked5)}
          />
          <span>Тюльпан</span>
        </label>
        <label className={s.checkbox}>
          <input
            className={s.checkSquare}
            type="checkbox"
            checked={checked6}
            onChange={() => setChecked6(!checked6)}
          />
          <span>Маттиола</span>
        </label>
        <label className={s.checkbox}>
          <input
            className={s.checkSquare}
            type="checkbox"
            checked={checked7}
            onChange={() => setChecked7(!checked7)}
          />
          <span>Ахилея</span>
        </label>
      </div>
      <div className={s.priceFilt}>
        <div className={s.title}>Цена</div>
        <Slider
          className={s.slider}
          value={values}
          onChange={setValues}
          min={MIN}
          max={MAX}
        />
        <div className={s.priceVal}>
          <div>490</div>
          <div>11490</div>
        </div>
        <div className={s.inputs}>
          <div className={s.input}>
            <span>от</span>
            <input type="text" name="" id="" />
          </div>
          <div className={s.input}>
            <span>до</span>
            <input type="text" name="" id="" />
          </div>
        </div>
      </div>
      <div className={s.checkboxes}>
        <div className={s.title}>Упаковка</div>
        <label className={s.checkbox}>
          <input
            className={s.checkSquare}
            type="checkbox"
            checked={checked8}
            onChange={() => setChecked(!checked8)}
          />
          <span>Корзина</span>
        </label>
        <label className={s.checkbox}>
          <input
            className={s.checkSquare}
            type="checkbox"
            checked={checked9}
            onChange={() => setChecked9(!checked9)}
          />
          <span>Лента</span>
        </label>
        <label className={s.checkbox}>
          <input
            className={s.checkSquare}
            type="checkbox"
            checked={checked10}
            onChange={() => setChecked10(!checked10)}
          />
          <span>Пленка</span>
        </label>
      </div>
      <button className={s.approve}>
        <span>Применить</span>
      </button>
    </div>
  );
};

export default Filter;