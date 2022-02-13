import React from "react";
import PropTypes from 'prop-types';

const CInput = (props) =>{
    return (
        <input 
            type={props.type} 
            onChange={props.onChange} 
            placeholder={props.placeholder} >
        </input>
    )
}

CInput.prototype = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}

export default CInput;