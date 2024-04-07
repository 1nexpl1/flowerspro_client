import React from 'react'
import Title from '../components/UI/Title/Title'
import Slick from '../components/SlickCarousel/Slick'

const MainPage = () => {
  return (
    <div className='mainWrapper'>
      <Title>Главная</Title>
      <div className='mainSlick'>
        <Slick />
      </div>
    </div>
  )
}

export default MainPage