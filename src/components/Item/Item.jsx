import React, { useEffect, useState } from "react";
import s from "./Item.module.css";
import { useHover } from "@uidotdev/usehooks";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { fetchOneDevice } from "../../http/DeviceAPI";
const Item = (props) => {
  const [ref, hovering] = useHover();
  const [count, setCount] = useState(1);
  const countIncrem = (e) => {
    e.stopPropagation()
    count > 1 ? setCount(count - 1) : setCount(1);
  }
  const [device, setDevice] = useState({ info: [] })
  useEffect(() => {
    fetchOneDevice(props.item.id).then(data => {
      let info = data.info.filter((el) => {
        return el.title === 'Состав'
      })
      setDevice(info)
    })

  }, [])
  let photo = 'https://api.flowers-pro-vp.ru/' + props.item.img
  let ItemObj = props.item
  ItemObj["count"] = count
  let router = useNavigate()
  let describe
  if (device[0]) {
    let res = device[0].description.split(', ')
    let arr2 = []
    res.map((el) => {
      if (el !== '') {
        let upperLetterElement = ' ' + el.split('-')[0].trim().toLowerCase()
        arr2.push(upperLetterElement)
      }
    })
    if (arr2.toString().length > 70){
      describe = `В составе: ${arr2.toString().substring(0, 70)}...`
    } else {
      describe = `В составе: ${arr2}`
    }
  } else {
    describe = null
  }
  return (
    <div className={s.wrapper} ref={ref}
      onClick={() => router(`/catalog/${props.item.id}`)}>
      {hovering ? (
        <div className={s.wrapperHovering}>
          <div className={s.photoWrapper}>
            <img className={s.photo} src={photo} alt="" />
          </div>
          <div className={s.description}>
            <div className={s.title}>{props.item.name}</div>
            <div className={s.desc}>{props.item.desc}</div>
            <div className={s.price}>{props.item.price}₽</div>
            <div className={s.input}>{props.item.input}</div>
          </div>
          <div className={s.buttons}>
            {describe ? (
              <div className={s.describe}>{describe}</div>
            ) : (
              <></>
            )}
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
          <div className={s.photoWrapper}>
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
