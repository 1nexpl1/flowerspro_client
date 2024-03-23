import React from 'react'
import s from './HoverContact.module.css'
import { useHover } from '@uidotdev/usehooks'
import tglogo from '../../images/telegram.png'
import vklogo from '../../images/logo-vk.png'
const HoverContact = () => {
    const [ref, hovering] = useHover()
    return (
        <>
        <div ref={ref} className={s.block}>
            Напишите нам, мы онлайн 
        </div>
        {hovering ? (
            <div  className={s.blocks}>
                <div className={s.blockCont}>
                    <img src={tglogo} alt="" />
                    <span>Telegram</span>
                </div>
                <div className={s.blockCont}>
                    <img src={vklogo} alt="" />
                    <span>Сообщение вконтакте</span>
                </div>
            </div>
        ): (
            <></>
        )}
        </>
    )
}

export default HoverContact