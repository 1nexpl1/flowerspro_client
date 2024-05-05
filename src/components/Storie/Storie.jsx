import React from 'react'
import Stories from 'react-insta-stories';
import s from './Storie.module.css'

const Storie = (props) => {
    let photo1 = 'https://api.flowers-pro-vp.ru/' + props.el.imgSmall
    let photo2 = 'https://api.flowers-pro-vp.ru/' + props.el.imgMain
    const story = [
        {
            url: photo1,
            duration: 5000,
            header: {
                heading: props.el.name,
                profileImage: photo2,
            },
        },
    ];
  return (
    <div className={s.modal} onClick={props.click}>
        <div onClick = {(e)=>e.stopPropagation()}>
        <Stories
            onStoryEnd={()=>props.setModal(false)}
            stories={story}
            defaultInterval={1500}
            width={432}
            height={768}
        />
        </div>
    </div>
  )
}

export default Storie