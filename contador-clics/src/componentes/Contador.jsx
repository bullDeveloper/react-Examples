import React from 'react'
import '../stylesheet/Contador.css'

function Contador(props){
    return(
        <div className="contador">
            {props.numClics}
        </div>
    );
}

export default Contador;