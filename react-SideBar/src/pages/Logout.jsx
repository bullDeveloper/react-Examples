import React from 'react';
import Sidebar from '../components/Sidebar'
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import '../styleSheets/Logout.css'

const Logout = () => {
  const navigate = useNavigate();

  const yesHandler = () => {
    navigate('/');
  }
  const noHandler = () => {
    navigate('/success');
  }

  return (
    <>
      <Sidebar />
      <div className='logout-container'>
        <h1 className='logout-title'>Estas seguro?</h1>
        <div className="logout-button-container">
          <Button className='logout-button-submit' onClick={yesHandler}>Si</Button>
          <Button className='logout-button-submit' onClick={noHandler}>No</Button>
        </div>
      </div>
    </>

  );
};

export default Logout;
