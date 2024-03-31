import React from 'react'
import s from './PhotosItem.module.css'
import Carousel from '../Carousel/Carousel'
const PhotosItem = (props) => {
  let photo = 'http://89.108.70.109:5000/' + props.item.img
  let photo1 = 'http://89.108.70.109:5000/' + props.item.img1
  let photo2 = 'http://89.108.70.109:5000/' + props.item.img2
  let photo3 = 'http://89.108.70.109:5000/' + props.item.img3
  let photo4 = 'http://89.108.70.109:5000/' + props.item.img4
  return (
  <Carousel image={photo} image1={photo1} image2={photo2} image3={photo3} image4={photo4}/>
  )
}

export default PhotosItem