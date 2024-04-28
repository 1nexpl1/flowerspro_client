import React, { useState } from "react";
import s from "./Item.module.css";
import { useHover } from "@uidotdev/usehooks";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Item = (props) => {
  const [ref, hovering] = useHover();
  const [count, setCount] = useState(1);
  const countIncrem = (e) =>{
    e.stopPropagation()
    count > 1 ? setCount(count - 1) : setCount(1);
  }
  let photo = 'https://flowers-pro-vp.ru/'+ props.item.img
  let ItemObj = props.item
  ItemObj["count"] = count
  let router = useNavigate()
  return (
    <div className={s.wrapper} ref={ref} 
    onClick={() => router(`/catalog/${props.item.id}`)}>
      {hovering ? (
        <div className={s.wrapperHovering}>
          <div>
            <img className={s.photo} src={photo} alt="" />
          </div>
          <div className={s.description}>
            <div className={s.title}>{props.item.name}</div>
            <div className={s.desc}>{props.item.desc}</div>
            <div className={s.price}>{props.item.price}₽</div>
            <div className={s.input}>{props.item.input}</div>
          </div>
          <div className={s.buttons}>
            <div className={s.value}>
              <button className="valueButDel" onClick={countIncrem}>
                <FaMinus />
              </button>
              <div>{count}</div>
              <button
                className="valueButAdd"
                onClick={(e) => {
                  e.stopPropagation()
                  setCount(count + 1)
                }}
              >
                <FaPlus />
              </button>
            </div>
            <div className={s.buy}>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  props.addItem(ItemObj)
                  props.toggleCart()
                }}
              >
                Купить
              </button>
              <button>Быстрый заказ</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <img className={s.photo} src={photo} alt="" />
          </div>
          <div className={s.description}>
            <div className={s.title}>{props.item.name}</div>
            <div className={s.desc}>{props.item.desc}</div>
            <div className={s.price}>{props.item.price}₽</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
