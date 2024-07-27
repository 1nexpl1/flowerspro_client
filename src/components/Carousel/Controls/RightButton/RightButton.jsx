import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import s from './RightButton.module.css'
const RightButton = ({ disabled, onClick }) => {
  return (
    <button
      type="button"
      className={s.button}
      disabled={disabled}
      onClick={onClick}
      aria-label="Previous Slide"
    >
        <FaChevronRight />
    </button>
  )
}

export default RightButton