import React, { useState } from 'react'
import s from './FilterMobile.module.css'
import { FaAngleDown } from "react-icons/fa6";
import Filter from '../Filter/Filter';
const FilterMobile = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={s.wrapper}>
        <div onClick={()=>setIsOpen(!isOpen)} className={s.button}>Фильтр <FaAngleDown/></div>
        {isOpen?(
            <><Filter click = {props.click} setIsOpen = {setIsOpen}/></>
        ):(
            <></>
        )}
    </div>
  )
}

export default FilterMobile