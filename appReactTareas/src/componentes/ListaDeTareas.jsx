import React, {useState} from "react";
import Tareaformulario from "./Tareaformulario";
import Tarea from "./Tarea";
import '../styleSheets/ListaDeTareas.css';


function ListaDeTareas(){

    const [tareas, setTasks] = useState([]);

    const agregarTarea = tarea => {
        console.log('Tarea agregada');
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTasks(tareasActualizadas);
            //console.log(tarea);
        }
    };

    const eliminarTarea = id =>{
        console.log('Eliminar tarea');
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTasks(tareasActualizadas);
    };

    const completarTarea = id =>{
        const tareasActualizadas = tareas.map(tarea =>{
            if(tarea.id ===id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });

        setTasks(tareasActualizadas);
    };

    return(
        <>
            <Tareaformulario onSubmit={agregarTarea}/>
            <div className='tareas-lista-contenedor'>
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea.id} 
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                        />
                    )
                }
            </div>
        
        </>
    );
}

export default ListaDeTareas;