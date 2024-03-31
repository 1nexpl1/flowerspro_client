import React from 'react'
import { IoMdOpen } from 'react-icons/io';
import ImageGallery from "react-image-gallery";
import s from './Carousel.module.css'
import "react-image-gallery/styles/css/image-gallery.css";
import { FaAngleLeft } from "react-icons/fa";

const Carousel = (props) => {
    const images = [
        {
            original: props.image,
            thumbnail: props.image,
            originalHeight: '550px',
            originalWidth: '550px',
            thumbnailHeight: '92px',
            thumbnailWidth: '92px',
        },
        {
            original: props.image1,
            thumbnail: props.image1,
            originalHeight: '550px',
            originalWidth: '550px',
            thumbnailHeight: '92px',
            thumbnailWidth: '92px',
        },

        
        {
            original: props.image2,
            thumbnail: props.image2,
            originalHeight: '550px',
            originalWidth: '550px',
            thumbnailHeight: '92px',
            thumbnailWidth: '92px',
        },
        {
            original: props.image3,
            thumbnail: props.image3,
            originalHeight: '550px',
            originalWidth: '550px',
            thumbnailHeight: '92px',
            thumbnailWidth: '92px',
        },
        {
            original: props.image4,
            thumbnail: props.image4,
            originalHeight: '550px',
            originalWidth: '550px',
            thumbnailHeight: '92px',
            thumbnailWidth: '92px',
        },
    ];
    
    return (
        
        <div><ImageGallery items={images} thumbnailPosition={'left'} showPlayButton={false} showFullscreenButton={false} /></div>
    )
}

export default Carousel