import React from 'react'
import { IoMdOpen } from 'react-icons/io';
import ImageGallery from "react-image-gallery";
import s from './Carousel.module.css'
import "react-image-gallery/styles/css/image-gallery.css";
import { FaAngleLeft } from "react-icons/fa";

const Carousel = (props) => {
    const mediaQuerry = window.matchMedia('(max-width: 940px)')
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
    const images2 = [
        {
            original: props.image,
            thumbnail: props.image,
            originalHeight: '300px',
            originalWidth: '300px',
            thumbnailHeight: '75px',
            thumbnailWidth: '75px',
        },
        {
            original: props.image1,
            thumbnail: props.image1,
            originalHeight: '300px',
            originalWidth: '300px',
            thumbnailHeight: '75px',
            thumbnailWidth: '75px',
        },


        {
            original: props.image2,
            thumbnail: props.image2,
            originalHeight: '300px',
            originalWidth: '300px',
            thumbnailHeight: '75px',
            thumbnailWidth: '75px',
        },
        {
            original: props.image3,
            thumbnail: props.image3,
            originalHeight: '300px',
            originalWidth: '300px',
            thumbnailHeight: '75px',
            thumbnailWidth: '75px',
        },
        {
            original: props.image4,
            thumbnail: props.image4,
            originalHeight: '300px',
            originalWidth: '300px',
            thumbnailHeight: '75px',
            thumbnailWidth: '75px',
        },
    ];
    return (
        <>
            {mediaQuerry.matches ? (
                <div>
                    <ImageGallery items={images2} thumbnailPosition={'bottom'} showPlayButton={false} showFullscreenButton={false} />
                </div>
            ) : (
                <div>
                    <ImageGallery items={images} thumbnailPosition={'left'} showPlayButton={false} showFullscreenButton={false} />
                </div>
            )}
        </>
    )
}

export default Carousel