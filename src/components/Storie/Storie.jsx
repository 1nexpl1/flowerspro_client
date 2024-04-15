import React from 'react'
import Stories from 'react-insta-stories';
import s from './Storie.module.css'

const Storie = (props) => {

    const story = [
        'https://placehold.co/432x768',
        {
            url: 'https://placehold.co/432x768',
            duration: 5000,
            header: {
                heading: 'Mohit Karekar',
                profileImage: 'https://placehold.co/100x100',
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