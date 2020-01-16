import React from 'react'
import './button.style.css'

const Button = ({ text, onClick }) => {

    return (
        <button className="button" onClick={onClick} > { text } </button>
    )

}

export { Button }
