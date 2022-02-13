import React, { useState } from "react";

export const Index = () => {
    const [mostrarUsuario, setMostarUsuario] = useState({});
    const componente = <span>Hola Mundo desde React</span>
    const componente2 = <span>Hola Universo desde React</span>

    return (
        <>
            {/*{mostrarUsuario && componente}*/}
            {mostrarUsuario ? componente : componente2}
        </>
    );
}