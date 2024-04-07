import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
const CustomArrNext = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} style={{...style, display: 'block',  width: '20px', height: '20px', top: '50%', ':before': {content: '', display: 'none'}}} className={className}>
        <FaArrowAltCircleRight style={{color: '#292929', width: '20px', height: '20px'}}/>
    </div>
  );
}

export default CustomArrNext