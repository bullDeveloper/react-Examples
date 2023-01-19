import React from 'react';
import Sidebar from '../components/common/Sidebar'
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from 'react-router-dom';
import { useAuthenticationContext } from "../components/authentication/AuthenticationProvider";
import './Logout.css'

const Logout = () => {
  const navigate = useNavigate();
  const { authenticationHandler } = useAuthenticationContext();

  const onClickHandler = () => {
    authenticationHandler({authtenticated:false,user:null});
    navigate('/success');
  }

 return (
    <>
      <Sidebar />
      <div className='logout-container'>
        <h1 className='logout-title'>Estas seguro?</h1>
        <div className="logout-button-container">
          <Link className='logout-button-submit' to='/'>Si</Link>
          <Button className='logout-button-submit' onClick={onClickHandler}>No</Button>
        </div>
      </div>
    </>

  );
};

export default Logout;
