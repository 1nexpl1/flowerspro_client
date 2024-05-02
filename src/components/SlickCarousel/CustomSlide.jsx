import React from 'react'
import s from './CustomSlide.module.css'
import { Link } from 'react-router-dom';
const CustomSlide = (props) => {
  let photo1 = 'https://api.flowers-pro-vp.ru/' + props.item.imgs1
  let photo2 = 'https://api.flowers-pro-vp.ru/' + props.item.imgs2
  console.log(props);
  return (
    <div style={{background: props.item.color}} className={s.slide}>
      <h3 className={s.titleSlide}>{props.item.title}</h3>
      <div className={s.description}>{props.item.description}</div>
      <Link className={s.linkSlide} to="/catalog" >В каталог {">"}</Link>
      <img className={s.photo1} src={photo1}/>
      <img className={s.photo2} src={photo2}/>
    </div>
  );
}

export default CustomSlide