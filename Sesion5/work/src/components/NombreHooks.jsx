import React, { useEffect } from "react";
import PropTypes from 'prop-types';

const NombreHooks = (props) => {
    const didMount = () => {
        console.log('Te damos la bienvenida ' + props.nombre);
    }
    const willUnmount = () => {
        return () => {
            console.log('Adios');
        }
    }
    useEffect(didMount, []);
    useEffect(willUnmount, []);
    return (
        <div>
            {props.nombre}
            <button onClick={props.borrarNombreLista}>x</button>
        </div>
    );
}

NombreHooks.propTypes = {
    nombre: PropTypes.string.isRequired,
    borrarNombreLista: PropTypes.func.isRequired
}

export default NombreHooks;