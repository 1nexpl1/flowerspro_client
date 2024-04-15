import React from 'react'
import s from './CustomSlide.module.css'
import { Link } from 'react-router-dom';
const CustomSlide = (props) => {
  let photo1 = 'http://89.108.70.109:5000/' + props.item.imgs1
  let photo2 = 'http://89.108.70.109:5000/' + props.item.imgs2
  return (
    <div style={{background: props.item.color}} className={s.slide}>
      <h3 className={s.titleSlide}>{props.item.title}</h3>
      <Link className={s.linkSlide} to="/catalog" >В каталог {">"}</Link>
      <img className={s.photo1} src={photo1}/>
      <img className={s.photo2} src={photo2}/>
    </div>
  );
}

export default CustomSlide