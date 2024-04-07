import React from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";
const CustomArrBefore = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} style={{ display: 'block',  width: '20px', height: '20px', top: '50%', '&::before': { display: 'none', content: "none"}}} className={className}>
          <FaArrowAltCircleLeft style={{color: '#292929', width: '20px', height: '20px'}}/>
      </div>
    );
}

export default CustomArrBefore