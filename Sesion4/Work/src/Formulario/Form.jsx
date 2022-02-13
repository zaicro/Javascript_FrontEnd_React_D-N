import React, { useState } from "react";
import './Form.css';

const Form = (props) => {
    const [nombre, setNombre] = useState('');
    const [state, setState] = useState({
        profesores: 0,
        alumnos: 0
    });
    const nombreChange = (e) => setNombre(e.target.value);
    const profesoresChange = (e) => setState({ ...state, profesores: e.target.value });
    const alumnosChange = (e) => setState({ ...state, alumnos: e.target.value });
    const onChange = (attr) => (e) => setState({
        ...state,
        [attr]: e.target.value,
    })
    return (
        <>
            <div>
                <form autoComplete="false" className="margen">
                    <input type="text" onChange={nombreChange} ></input>{nombre}<br />
                    <input type="number" onChange={onChange('profesores')} ></input>{state.profesores}<br />
                    <input type="number" onChange={onChange('alumnos')} ></input>{state.alumnos}<br />
                </form>
            </div>
        </>
    )
}

export default Form;