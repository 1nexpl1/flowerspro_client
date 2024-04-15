import React, { useState } from 'react'
import s from './StorieIcon.module.css'
import photo from '../../images/placeholdstorie.jpg'
import Storie from '../Storie/Storie'
const StorieIcon = (props) => {
    const [modal, setModal] = useState(false)
    const click = (e) => {
        e.preventDefault()
        setModal(!modal)
        console.log(modal);
    }
    return (
        <>
            <div className={s.butWrapper}>
                <button className={s.but} onClick={click}>
                    <img src={photo} />
                </button>
                <h3 className={s.smallTitle} onClick={click}>{props.el.name}</h3>
            </div>
            {modal ? <Storie click={click} el={props.el}/> : <></>}
        </>
    )
}

export default StorieIcon