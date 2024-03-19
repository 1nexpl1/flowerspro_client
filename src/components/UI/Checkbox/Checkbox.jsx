import React, { useState } from 'react'
import s from './Checkbox.module.css'
const Checkbox = (props) => {
  const [checked, setChecked] = useState(false);
  return (
    <label className={s.checkbox}>
          <input
            className={s.checkSquare}
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span>{props.name}</span>
    </label>
  )
}

export default Checkbox