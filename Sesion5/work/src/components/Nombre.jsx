import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Nombre extends Component {
    componentDidMount() {
        alert('Te damos la bienvenida ' + this.props.nombre);
    }
    componentWillUnmount() {
        alert('Adios');
    }
    render() {
        return (
            <div>
                {this.props.nombre}
                <button onClick={this.props.borrarNombreLista}>
                    x
                </button>
            </div>
        )
    }
}

Nombre.propTypes = {
    nombre: PropTypes.string.isRequired,
    borrarNombreLista: PropTypes.func
}