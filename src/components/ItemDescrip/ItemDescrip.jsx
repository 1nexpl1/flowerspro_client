import React, { useState } from 'react'
import s from './ItemDescrip.module.css'
import { useHover } from '@uidotdev/usehooks';
import { FaMinus, FaPlus, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { FaTelegramPlane } from "react-icons/fa";
const ItemDescrip = (props) => {
    const [ref, hovering] = useHover();
    const [count, setCount] = useState(1);
    const countIncrem = () => {
        count > 1 ? setCount(count - 1) : setCount(1);
    }
    console.log(props.item);
    return (
        <div className={s.wrapper}>
            <h1 className={s.h1title}>{props.item.name}</h1>
            <div className={s.price}>{props.item.price}₽</div>
            <div className={s.buttons}>
                <div className={s.value}>
                    <button className="valueButDel" onClick={countIncrem}>
                        <FaMinus />
                    </button>
                    <div>{count}</div>
                    <button
                        className="valueButAdd"
                        onClick={() => setCount(count + 1)}
                    >
                        <FaPlus />
                    </button>
                </div>
                <div className={s.buy}>
                    <button>
                        Купить
                    </button>
                    <button>Быстрый заказ</button>
                </div>
            </div>
            {props.item.info.map(info=>
                <>
                <div className={s.subTitle}>
                    {info.title}
                </div>
                <div className={s.desc}>
                    {info.description}
                </div>
                </>
            )}
            <div className={s.icons}>
                <FaTelegramPlane />
                <FaWhatsapp />
            </div>
        </div>
    )
}

export default ItemDescrip