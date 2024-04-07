import React from 'react'
import s from './CustomSlide.module.css'
import { Link } from 'react-router-dom';
import photo from '../../images/kust.jpg'
const CustomSlide = (props) => {
  const {...otherProps} = props;
  return (
    <div {...otherProps} className={s.slide}>
      <h3 className={s.titleSlide}>Красивый заголовок</h3>
      <Link className={s.linkSlide} to="/catalog" >В каталог {">"}</Link>
      <img className={s.photo1}src={photo}/>
      <img className={s.photo2}src={photo}/>
    </div>
  );
}

export default CustomSlide