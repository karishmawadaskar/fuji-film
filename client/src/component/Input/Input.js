import React from 'react'
import './Input.css'

function Input({ value,onchange ,lable ,placeholder,type="text"}) {
    return (
        <div>
            <div className='input-container'>
                <label htmlFor={lable}className='input-lable'>
                   {lable}
                </label>
                <input
                    type={type}
                    id={lable}
                    className='input-element'
                    value={value}
                    onChange={(e) => onchange( e.target.value )} 
                    placeholder={placeholder}/>
            </div>
        </div>
    )
}

export default Input;