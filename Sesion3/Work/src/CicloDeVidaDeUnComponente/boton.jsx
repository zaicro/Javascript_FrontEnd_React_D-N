import React from "react";
import PropTypes from 'prop-types';

const Boton = (props) =>{
    return (
        <>
        <button onClick={props.handleClick}>
            {props.texto}
        </button>
        </>
    )
}

Boton.prototype = {
    texto: PropTypes.string,
    handleClick: PropTypes.func
}

export default Boton;