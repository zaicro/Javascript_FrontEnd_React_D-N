import React from "react";
import MiTercerComponente from './MiTercerComponente'

function MiSegundoComponente() {
    return (
        <div>
            Mi Segundo Componente
            <MiTercerComponente/>
        </div>
    )
}

export default MiSegundoComponente;