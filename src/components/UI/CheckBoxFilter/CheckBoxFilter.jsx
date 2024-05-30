import React, { useState } from 'react'

const CheckBoxFilter = (props) => {
    const [checked, setChecked] = useState(false);
    const checkedClick = () => {
        setChecked(!checked)
        checked ? props.setType(null) : props.id ? props.setType(props.id) : props.setType(props.name)
    }
    return (
        <label className={s.checkbox}>
            <input
                className={s.checkSquare}
                type="checkbox"
                checked={checked}
                onChange={checkedClick}
            />
            <span>{props.name}</span>
        </label>
    )
}


export default CheckBoxFilter