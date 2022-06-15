import React, {Fragment, useState, useRef} from 'react';



const ProyectInfo = () => {
    return(
        <Fragment>
            <h2>Paso 1 Registre Su Proyecto</h2>
            <input type = "text" placeholder = "Nombre"/>
            <p></p>
            <input type = "text" placeholder = "Fecha Inicio"/>
            <p></p>
            <input type = "text" placeholder = "Fecha Fin"/>
            <p></p>
            <input type = "text" placeholder = "Prioridad"/>
        </Fragment>
    );
  }
export default ProyectInfo;