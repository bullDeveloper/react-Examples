import Sidebar from '../components/common/Sidebar'
import { useLocation } from 'react-router-dom';
import  './AddUserSuccess.css'

export const AddUserSucess = () => {
  
  const location = useLocation();

  if(location.state){
    localStorage.setItem('localStateAddUserSucess', JSON.stringify(location.state));
  }else
    console.log("se obtuvo informacion del localStorage");
  
  const state = location.state? location.state : JSON.parse(localStorage.getItem('localStateAddUserSucess'));

  const ci = state.ci;
  const name = state.name;
  const lastName = state.lastName;
  const adress = state.adress;
  const position = state.position;

  return (
    <>
      <Sidebar />
      <div className='add-user-success'>
        <div className='add-user-title'>
          <h1>El usuario se dio de alta Exitosamente!</h1>
        </div>
        <div className='table-center'>
          <div><b>Cedula de Identidad: </b>{ci}</div>
          <div><b>Nombre: </b>{name}</div>
          <div><b>Apellidos: {lastName}</b></div>
          <div><b>Direccion: </b>{adress}</div>
          <div><b>Cargo:</b> {position}</div>
        </div>
      </div>
    </>
  );
};
