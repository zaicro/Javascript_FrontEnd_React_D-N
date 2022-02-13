import React, { useState } from "react";
import { CButton } from './CButton';
import './style.css'

export const Counter = () => {

    const [state, setState] = useState({
        valor: 0
    });  
    const handleImputChange = (e) => {
        setState({
            valor: e.target.value
        })
    }
    const sumar = () => {
        let nombreEstado = state.valor;
        nombreEstado++;
        setState({
            valor: nombreEstado
        })
    }
    const restar = () => {
        let nombreEstado = state.valor;
        nombreEstado--;
        setState({
            valor: nombreEstado
        })
    }
    return (
        <div className="postwork_content">
            <CButton onClick={sumar} title="Sumar" className="postwork_button" />
            <input type="number" value={state.valor} onChange={handleImputChange}  className="postwork_input"/>
            <CButton onClick={restar} title="Restar" className="postwork_button"/>
        </div>
    )
}