import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Add-User.css'


const RegisterUser = () => {

  const [ci, setCi] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [position, setPosition] = useState("");

  const navigate = useNavigate();

  function enabledButtom() {
    return ci.length > 0 && name.length > 0 && lastName.length > 0 && adress.length > 0 && position.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    navigate("/add-user-success",{state:{ci:ci, name:name, lastName:lastName, adress:adress, position:position}});
    console.log("Y se marcho!")
  }

  return (
    <>
      <Sidebar />
      <div className='add-user'>
        <h1>Alta Usuario</h1>
        <Form onSubmit={handleSubmit} className='add-user-form'>
            <Form.Group className='input-container' size="lg" controlId="email">
              <Form.Label>Cedula de Identidad</Form.Label>
              <Form.Control
                className='input-form'
                autoFocus
                type="text"
                value={ci}
                onChange={(e) => setCi(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='input-container' size="lg" controlId="email">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                className='input-form'
                autoFocus
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='input-container' size="lg" controlId="email">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                className='input-form'
                autoFocus
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='input-container' size="lg" controlId="email">
              <Form.Label>Direccion</Form.Label>
              <Form.Control
                className='input-form'
                autoFocus
                type="text"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='input-container' size="lg" controlId="email">
              <Form.Label>Cargo</Form.Label>
              <Form.Control
                className='input-form'
                autoFocus
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </Form.Group>

            <div className="button-container">
              <Button size="lg" type="submit" disabled={!enabledButtom()}>
                Agregar Usuario
              </Button>
            </div>
          </Form>
      </div>
    </>
  );
};

export default RegisterUser;
