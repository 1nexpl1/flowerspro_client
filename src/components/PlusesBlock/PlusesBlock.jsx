import React from 'react'
import s from './PlusesBlock.module.css'
const PlusesBlock = () => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>Преимущества FlowersPro</h1>
            <ul className={s.list}>
                <li>Более 200 вариантов букетов и композиций доступны для регулярного заказа</li>
                <li>Гибкие условия доставки. Возможность доставки заказа день в день</li>
                <li>Индивидуальные условия оплаты по безналичному расчету</li>
                <li>Ежегодная подготовка новогодней коллекции и коллекции к 8 марта</li>
                <li>Система накопительной скидки для партнеров и постоянных клиентов</li>
            </ul>
        </div>
    )
}

export default PlusesBlock