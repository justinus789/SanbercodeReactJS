import React from 'react'

const Checkbox = (props) => {
    return (
        <div className='checkbox-container'>
            <input type="checkbox" className='checkmark' value={props.name}/>
            <label>{props.name}</label>
        </div>
    )
}

export default Checkbox;