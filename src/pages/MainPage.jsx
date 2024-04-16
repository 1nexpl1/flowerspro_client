import React, { useContext, useEffect, useState } from 'react'
import Slick from '../components/SlickCarousel/Slick'
import Title from '../components/UI/Title/Title'
import Storie from '../components/Storie/Storie'
import ReactInstaStories from 'react-insta-stories';
import StorieIcon from '../components/StorieIcon/StorieIcon';
import { fetchPost, fetchStorie } from '../http/contentAPI';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
const MainPage = observer(() => {
  const {content} = useContext(Context) 
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    fetchStorie().then(data => {   
      console.log(data);  
      content.setStories(data)
    })
    fetchPost().then(data => {      
      content.setPosts(data)
    }).finally(()=>setLoading(false))
  },[])
  console.log(fetchStorie());
  return (
    <div className='mainWrapper'>
      <Title>Главная</Title>
      <div className='mainSlick'>
        <Slick />
      </div>
      <div className='mainStories'>
        {content.stories.map((el) =>
          <StorieIcon el={el}/>
        )}
      </div>
    </div>
  )
});

export default MainPage