import React from "react";
import '../stylesheet/Boton.css';

function Boton(props){

    const esOperador = valor =>{
        return isNaN(valor) && (valor!=='.') && (valor !== '=');
    };

    return (
        <div onClick={() => props.manejarClic(props.children)}  
             className={`boton-contenedor  ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} >
            {props.children}
        </div>
    );
}

export default Boton;