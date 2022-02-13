import React, { Component } from "react";
import Nombre from './Nombre';

export default class FormListClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            mensaje: '',
            listaNombres: ['Bedu']
        };
    }
    componentDidUpdate = (preProps, prevState) => {
        if (this.state.listaNombres !== prevState.listaNombres)
            this.setState({
                mensaje: `Longitud de la lista es: ${this.state.listaNombres.length}`
            });
    }
    handleImputChange = (e) => {
        this.setState({
            nombre: e.target.value
        })
    }
    handleClick = () => {
        const nombreEstado = this.state.nombre;
        if (!nombreEstado) return;
        const listaActualizada = [
            ...this.state.listaNombres,
            nombreEstado
        ]
        this.setState({
            nombre: '',
            listaNombres: listaActualizada
        })
    }
    borrarNombreLista = (key) => {
        const _listaNombre = [...this.state.listaNombres];
        _listaNombre.splice(key, 1);
        this.setState({
            listaNombres: _listaNombre
        });
    }
    render() {
        return (
            <div>
                {this.state.mensaje}
                <br />
                <input value={this.state.nombre} onChange={this.handleImputChange} />
                <button onClick={this.handleClick}>Agregar</button>
                <ul>
                    {this.state.listaNombres.map((text, key) => (
                        <li key={key}>
                            <Nombre nombre={text}
                                borrarNombreLista={this.borrarNombreLista} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}