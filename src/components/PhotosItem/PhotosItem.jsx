import React from 'react'
import s from './PhotosItem.module.css'
import Carousel from '../Carousel/Carousel'
const PhotosItem = (props) => {
  let photo = 'http://89.108.70.109:5000/' + props.item.img
  return (
  <Carousel image={photo}/>
  )
}

export default PhotosItem