import React, { useContext } from 'react'
import s from './BlockItems.module.css'
import { Context } from '../..'
import Item from '../Item/Item'

const BlockItems = (props) => {
    const { device } = useContext(Context)
    let eight = device.devices.slice(0, 8)
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>Новинки</h1>
            <div className={s.wrapperList}>
                {eight.map(device =>
                    <Item toggleCart={props.toggleCart} key={device.id} item={device} addItem={props.addItem} />
                )}
            </div>
        </div>
    )
}

export default BlockItems