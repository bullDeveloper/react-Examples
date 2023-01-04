import React from 'react';
import '../stylesheet/Boton.css'

class Boton extends React.Component{
    render(){
        return(
            <button
                className={this.props.esBotondeClic ? 'boton-clic' : 'boton-reiniciar'}
                onClick={this.props.manejarClic}>
                {this.props.texto}
            </button>
        );
    }
}

export default Boton;