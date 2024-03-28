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
                {hovering ? (
                    <div className={s.blocks}>
                        <a href='https://t.me/flowerspro_vp' target='_blank'  className={s.blockCont}>
                            <img src={tglogo} alt="" />
                            <span>Telegram</span>
                        </a>
                        <a href='https://vk.com/flowersprovp' target='_blank' className={s.blockCont}>
                            <img src={vklogo} alt="" />
                            <span>Сообщение вконтакте</span>
                        </a>
                    </div>
                ) : (
                    <></>
                )}
            </div>

        </>
    )
}

export default HoverContact