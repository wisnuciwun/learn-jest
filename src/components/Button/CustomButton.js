import React from 'react'


function CustomButton({ message, className }) {
    return (
        <div className={className} data-testid="button">{message}</div>
    )
}

export default CustomButton