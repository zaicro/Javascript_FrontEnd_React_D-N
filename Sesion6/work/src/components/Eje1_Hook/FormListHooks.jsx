import React, { useState, useEffect } from "react";
import { NombreHooks } from './NombreHooks';

export const FormListHooks = (props) => {

    const [state, setState] = useState({
        nombre: '',
        mensaje: '',
        listaNombres: ['Bedu']
    });
    const didUpdate = () => {
        setState({
            ...state,
            mensaje: `Longitud de la lista es: ${state.listaNombres.length}`
        });
    }
    const handleInputChange = (e) => {
        setState({
            ...state,
            nombre: e.target.value
        })
    }
    const handleClick = () => {
        let nombreEstado = state.nombre;
        if (!nombreEstado) return;
        let listaActualizada = [
            ...state.listaNombres,
            nombreEstado
        ]
        setState({
            nombre: '',
            listaNombres: listaActualizada
        })
    }
    const borrarNombreLista = (key) => {
        let _listaNombre = [...state.listaNombres];
        _listaNombre.splice(key, 1);
        setState({
            ...state,
            listaNombres: _listaNombre
        });
    }
    useEffect(didUpdate, [state.listaNombres]);
    return (
        <div>
            {state.mensaje}
            <br />
            <input value={state.nombre} onChange={handleInputChange} />
            <button onClick={handleClick}>Agregar</button>
            <ul>
                {state.listaNombres.map((text, key) => (
                    <li key={key}>
                        <NombreHooks nombre={text}
                            borrarNombreLista={borrarNombreLista} />
                    </li>
                ))}
            </ul>
        </div>
    );
}