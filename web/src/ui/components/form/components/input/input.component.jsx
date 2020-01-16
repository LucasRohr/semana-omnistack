import React from 'react'
import PropTypes from 'prop-types'
import './input.style.css'

const Input = ({ label, onChange, value, type }) => {

    return (

        <label className="input-container" >
            <span className="input-label" > {label} </span>
            <input className="input" type={type} onChange={onChange} value={value} />
        </label>

    )

}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
    type: PropTypes.string
}

export { Input }
