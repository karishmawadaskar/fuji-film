import React from 'react'
import './Input.css'

function Input({ value,onChange ,label ,placeholder,type="text"}) {
    return (
        <div>
            <div className='input-container'>
                <label htmlFor={label}className='input-lable'>
                   {label}
                </label>
                <input
                    type={type}
                    id={label}
                    className='input-element'
                    value={value}
                    onChange={(e) => onChange( e.target.value )} 
                    placeholder={placeholder}
                    required="true"
                    />
            </div>
        </div>
    )
}

export default Input;