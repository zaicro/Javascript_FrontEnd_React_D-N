import React, { useState } from "react";
import CInput from './c-input';
import './Form.css';

const Form_2 = () => {
    const [state, setState] = useState({
        nombre: '',
        apellidos: [
            '', //Paterno
            '' //Materno
        ]
    });
    const onChange = (attr) => (e) => setState({
        ...state,
        [attr]: e.target.value,
    })
    const onChange2 = (attr, i) => (e) => {
        let arr = [...state[attr]];
        arr[i] = e.target.value;
        setState({
            ...state,
            [attr]: arr
        })
    }
    return (
        <>
            <div>
                <form autoComplete="false">
                    <CInput type="text" onChange={onChange('nombre')} placeholder="Nombre"></CInput>
                    <CInput type="text" onChange={onChange2('apellidos', 0)} placeholder="Apellido Paterno"></CInput>
                    <CInput type="text" onChange={onChange2('apellidos', 1)} placeholder="Apellido Materno"></CInput>
                    <br/>
                    <span>
                        Mi nombre es:<br />
                        {state.nombre} {state.apellidos[0]} {state.apellidos[1]}
                    </span>
                </form>
            </div>
        </>
    )
}

export default Form_2;