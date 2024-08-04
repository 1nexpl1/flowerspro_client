import React from 'react'
import s from './CustomSlide.module.css'
import { Link } from 'react-router-dom';
import photo from '../../images/hoho.jpg'
import photo3 from '../../images/xxx.jpg'
const CustomSlide = (props) => {
  let photo1 = 'https://api.flowers-pro-vp.ru/' + props.item.imgs1
  let photo2 = 'https://api.flowers-pro-vp.ru/' + props.item.imgs2
  const mediaQuerry = window.matchMedia("(max-width: 755px)")
  return (
    <div style={{ background: props.item.color }} className={s.slide}>
      <div className={s.text} style={{color: props.item.color}}>
        <h3 className={s.titleSlide}>{props.item.title}</h3>
        <Link className={s.linkSlide} to="/catalog" style={{color: props.item.color}}>В каталог {">"}</Link>
        <div className={s.description}>{props.item.description}</div>
      </div>
      <div>
      {(mediaQuerry.matches) ?
        <>
          <img className={s.photo2} src={photo2} />
        </>
        :
        <>
          <img className={s.photo1} src={photo1} />
        </>
      }
      </div>
    </div>
  );
}

export default CustomSlide