import React, { useState } from "react";
import '../styleSheets/SearchServiceFormulario.css'

function SearchServiceFormulario (props){

    const [keySearch, setInput] = useState('');

    const setearInput = e =>{
        setInput(e.target.value);
    };

    const SearchServiceSubmit = e => {
        e.preventDefault();
        props.onSubmit(keySearch);
    };

    return(
        <form className='busqueda-formulario'
              onSubmit={SearchServiceSubmit}>
            <input 
                className='busqueda-input'
                type='text'
                placeholder='Inserte palabra a buscar'
                name='texto'
                onChange={setearInput}/>
            <button id='idSubmit' className="busqueda-boton" >
                Consult
            </button>
        </form>
    );
}

export default SearchServiceFormulario;