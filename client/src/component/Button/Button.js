import React from 'react'
import './Button.css'

function Button({title, onClick,variant}) {
    return (
        <div>
            <button
             className={`btn ${variant}`} 
             onClick={onClick}>
            {title}
            </button>
        </div>
    )
}

export default Button