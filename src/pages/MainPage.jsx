import React, { useContext, useEffect, useState } from 'react'
import Slick from '../components/SlickCarousel/Slick'
import Title from '../components/UI/Title/Title'
import Storie from '../components/Storie/Storie'
import ReactInstaStories from 'react-insta-stories';
import StorieIcon from '../components/StorieIcon/StorieIcon';
import { fetchPost, fetchStorie } from '../http/contentAPI';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import PlusesBlock from '../components/PlusesBlock/PlusesBlock';
import BlockItems from '../components/BlockItems/BlockItems';
const MainPage = observer((props) => {
  const {content} = useContext(Context) 
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    fetchStorie().then(data => {  
      content.setStories(data)
    })
    fetchPost().then(data => {      
      content.setPosts(data)
    }).finally(()=>setLoading(false))
  },[])
  return (
    <div className='mainWrapper'>
      <div className='mainSlick'>
        <Slick />
      </div>
      <div className='mainStories'>
        {content.stories.map((el) =>
          <StorieIcon el={el}/>
        )}
      </div>        
      <PlusesBlock />
      <BlockItems addItem={props.addItem} toggleCart={props.toggleCart}/>
    </div>
  )
});

export default MainPage