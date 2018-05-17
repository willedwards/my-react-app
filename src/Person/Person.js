import React from 'react'
import './Person.css';//injected dynamically with webpack


const person = (props) => {

    return (
        <div className='Person' >
            <p onClick={props.onClick}> I'm {props.name} and am {props.age} old </p>
        <p>{props.children}</p>
       <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;