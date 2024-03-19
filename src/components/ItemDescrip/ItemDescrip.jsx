import React, { useState } from 'react'
import s from './ItemDescrip.module.css'
import { useHover } from '@uidotdev/usehooks';
import { FaMinus, FaPlus, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import Title from '../UI/Title/Title';
const ItemDescrip = (props) => {
    const [ref, hovering] = useHover();
    const [count, setCount] = useState(1);
    const countIncrem = () => {
        count > 1 ? setCount(count - 1) : setCount(1);
    }
    console.log(props.item);
    return (
        <div className={s.wrapper}>
            <Title>{props.item.name}</Title>
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
            
            <div className={s.subTitle}>
                Описание
            </div>
            <div className={s.desc}>
                Нежный букет в персиково-белой цветовой гамме. В составе пионовидные розы, махровая эустома, диантус, хлопок, нерине, кустовые розы, кортадерия, эвкалипт и писташ. Букет упакован в стильную матовую пленку винного цвета и перевязан декоративными лентами. С букетом вы получите конверт с открыткой, в которой мы напечатаем любое пожелание, инструкцию свежести и средство для продления жизни срезанных цветов. Для комфортной дальнейшей транспортировки добавьте при заказе к цветам аквапак и пер
            </div>
            <div className={s.subTitle2}>
                Цветы
            </div>
            <div className={s.desc}>
                Роза пионовидная, Роза кустовая, Хлопок, Диантус, Эустома, Роза одноголовая
            </div>
            <div className={s.subTitle2}>
                Упаковка
            </div>
            <div className={s.desc}>
                Ленты, Пленка
            </div>
            <div className={s.subTitle2}>
                Высота
            </div>
            <div className={s.desc}>
                около 45 см
            </div>
            
            <div className={s.subTitle}>
                Поделиться
            </div>
            <div className={s.icons}>
                <FaTelegram />
                <FaWhatsapp />
            </div>
        </div>
    )
}

export default ItemDescrip