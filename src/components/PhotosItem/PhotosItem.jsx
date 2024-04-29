import React from 'react'
import s from './PhotosItem.module.css'
import Carousel from '../Carousel/Carousel'
const PhotosItem = (props) => {
  let photo = 'https://api.flowers-pro-vp.ru/' + props.item.img
  let photo1 = 'https://api.flowers-pro-vp.ru/' + props.item.img1
  let photo2 = 'https://api.flowers-pro-vp.ru/' + props.item.img2
  let photo3 = 'https://api.flowers-pro-vp.ru/' + props.item.img3
  let photo4 = 'https://api.flowers-pro-vp.ru/' + props.item.img4
  return (
  <Carousel image={photo} image1={photo1} image2={photo2} image3={photo3} image4={photo4}/>
  )
}

export default PhotosItem