import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { useAuthenticationContext } from "../components/authentication/AuthenticationProvider";


export default function Login() {

  //const emailValidos = ['jlabat@iuvity.net', 'geovana@iuvity.net'];
  //const passwordValido = ['@Todo12345'];
  // valid username & password
  //username: 'kminchelle',
  //password: '0lelplR',

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {authenticationHandler} = useAuthenticationContext();

  function validateForm() {
    return user.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: user,
        password: password
      })
    };

    try{
      console.log('Conect to service Login, user:' + user + ' | pass:' + password);
      const response = await fetch('https://dummyjson.com/auth/login', requestOptions);
      const data = await response.json();
      if(data.token){
        console.log("user:" + data.firstName +" "+ data.lastName);
        console.log("token:" + data.token);
        authenticationHandler({authtenticated:true,user:data.firstName +" "+ data.lastName, userImage: data.image});
        navigate('/success');
      }else{
        console.log('ERROR');
      }

    } catch(error){
      console.log(error);
    }

  }

  return (
    <div className='main-container'>
      <video src='../videos/video-1.mp4' autoPlay loop muted />
      <div className="Login">
        <h1 className="title">BIENVENIDO</h1>
        <Form onSubmit={handleSubmit} className='login-form'>
          <Form.Group className='input-container' size="lg" controlId="email">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              className='input-form'
              autoFocus
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='input-container' size="lg" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              className='input-form'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="button-container">
            <Button size="lg" type="submit" disabled={!validateForm()}>
              Ingresar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};