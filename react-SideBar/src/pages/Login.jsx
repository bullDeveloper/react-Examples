import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { useAuthenticationContext } from "../components/authentication/AuthenticationProvider";

export default function Login() {

  const emailValidos = ['jlabat@iuvity.net', 'geovana@iuvity.net'];
  const passwordValido = ['@Todo12345'];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {loginHandler} = useAuthenticationContext();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Conect to service Login, email:' + email + ' | pass:' + password);
    if (emailValidos.includes(email) && passwordValido.includes(password)) {
      console.log('Bingo');
      loginHandler();
      navigate('/success');
    }
  }

  return (
    <div className='main-container'>
      <video src='../videos/video-1.mp4' autoPlay loop muted />
      <div className="Login">
        <h1 className="title">BIENVENIDO</h1>
        <Form onSubmit={handleSubmit} className='login-form'>
          <Form.Group className='input-container' size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className='input-form'
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <Button className='input-form-submit' size="lg" type="submit" disabled={!validateForm()}>
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};