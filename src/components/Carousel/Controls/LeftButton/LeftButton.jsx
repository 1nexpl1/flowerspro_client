import React from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import s from './LeftButton.module.css'
const LeftButton = ({ disabled, onClick }) => {
  return (
    <button
      type="button"
      className={s.button}
      disabled={disabled}
      onClick={onClick}
      aria-label="Previous Slide"
    >
        <FaChevronLeft />
    </button>
  )
}

export default LeftButton