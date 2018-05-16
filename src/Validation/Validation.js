import React from 'react'

const validator = (props) =>{
       return (props.textLength < 5) ? <p>text too short</p> : <p>long enough</p>;
}

export default validator;