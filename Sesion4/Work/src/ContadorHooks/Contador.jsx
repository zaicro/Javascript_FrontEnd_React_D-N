import React, { useState } from "react";
import Boton from './Boton';

//Hooks

const Contador = () => {
    const [contador, setContador] = useState(0);
    const handleClick = () => {
        setContador(contador + 1)
    }

    return (
        <>
        <Boton texto={contador} handleClick={handleClick}>

        </Boton>
        </>
    )
}

export default Contador;