import React, { useState } from "react";
import s from "./CartItem.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";
const CartItem = (props) => {
  const [count, setCount] = useState(props.count);
  const countIncrem = (e) => {
    if (count > 1)  {
      setCount(count - 1)
      props.setSum(props.sum-props.price)
    }else 
    {setCount(1)}
  };
  const dincrem = (e) => {
    setCount(count+1)
    props.setSum(props.sum+props.price)
  };
  let photo = 'http://localhost:5000/'+ props.img
  return (
    <div className={s.item}>
      <div className={s.itemPhoto}>
        <img src={photo} alt="" />
      </div>
      <div className={s.itemInfo}>
        <div>
          <h3 className={s.itemTitle}>{props.name}</h3>
          <div className={s.price}>{props.price}</div>
        </div>
        <div className={s.value}>
          <button className="valueButDel" onClick={countIncrem}>
            <FaMinus />
          </button>
          <div>{count}</div>
          <button className="valueButAdd" onClick={dincrem}>
            <FaPlus />
          </button>
        </div>
      </div>
      <button
        className={s.itemDelete}
        onClick={() =>
          props.deleteItem({
            id: props.id,
            name: props.name,
            price: props.price,
            count: count,
          })
        }
      >
        <svg
          viewPort="0 0 12 12"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1"
            y1="15"
            x2="15"
            y2="1"
            stroke="#292929"
            stroke-width="2"
          />
          <line
            x1="1"
            y1="1"
            x2="15"
            y2="15"
            stroke="#292929"
            stroke-width="2"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
