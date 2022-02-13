import React, { useState, useEffect } from "react";
import Nombre from './NombreHooks';

const FormListHooks = (props) => {

    const [state, setState] = useState({
        nombre: '',
        mensaje: '',
        listaNombres: ['Bedu']
    });
    const didUpdate = (preProps, prevState) => {
        if (state.listaNombres !== prevState.listaNombres)
            setState({
                mensaje: `Longitud de la lista es: ${state.listaNombres.length}`
            });
    }
    const handleInputChange = (e) => {
        setState({
            nombre: e.target.value
        })
    }
    const handleClick = () => {
        const nombreEstado = state.nombre;
        if (!nombreEstado) return;
        const listaActualizada = [
            ...state.listaNombres,
            nombreEstado
        ]
        setState({
            nombre: '',
            listaNombres: listaActualizada
        })
    }
    const borrarNombreLista = (key) => {
        const _listaNombre = [...state.listaNombres];
        _listaNombre.splice(key, 1);
        setState({
            listaNombres: _listaNombre
        });
    }
    useEffect(didUpdate, []);
    return (
        <div>
            {state.mensaje}
            <br />
            <input value={state.nombre} onChange={handleInputChange()} />
            <button onClick={handleClick()}>Agregar</button>
            <ul>
                {state.listaNombres.map((text, key) => (
                    <li key={key}>
                        <Nombre nombre={text}
                            borrarNombreLista={borrarNombreLista()} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FormListHooks;