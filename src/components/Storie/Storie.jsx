import React from 'react'
import Stories from 'react-insta-stories';
import s from './Storie.module.css'

const Storie = (props) => {
    console.log(props.el);
    let photo1 = 'http://89.108.70.109:5000/' + props.el.imgSmall
    let photo2 = 'http://89.108.70.109:5000/' + props.el.imgMain
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