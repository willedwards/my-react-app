import React from 'react'
import './CharComponent.css';//injected dynamically with webpack

const charcomponent = (props) => {
    return (
        <div className='CharComponent' onClick={props.onClick} >
            <p> {props.char} </p>
        </div>
    )
}

export default charcomponent;