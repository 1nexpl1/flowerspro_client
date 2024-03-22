import React from 'react'
import s from './PhotosItem.module.css'
import Carousel from 'react-bootstrap/Carousel';
const PhotosItem = (props) => {
  let photo = 'http://89.108.70.109:5000/' + props.item.img
  return (
    <Carousel className={s.carou} data-bs-theme="dark">
    <Carousel.Item>
      <img className={s.img} src={photo} alt="" />
    </Carousel.Item>
    <Carousel.Item>
      <img className={s.img} src={photo} alt="" />
    </Carousel.Item>
    <Carousel.Item>
      <img className={s.img} src={photo} alt="" />
    </Carousel.Item>
  </Carousel>
  )
}

export default PhotosItem