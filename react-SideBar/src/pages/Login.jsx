import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { useAuthenticationContext } from "../components/authentication/AuthenticationProvider";
import FormInput from "../components/common/FormInput";


export default function Login() {

  //username: 'kminchelle',
  //password: '0lelplR',

  const navigate = useNavigate();
  const { authenticationHandler } = useAuthenticationContext();
  const [btnDisabled, setBtnDisabled] = useState('disabled');
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      /*pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,*/
      required: true,
    }
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: values.username,
        password: values.password
      })
    };

    try {
      console.log('Conect to service Login, user:' + values.username + ' | pass:' + values.password);
      const response = await fetch('https://dummyjson.com/auth/login', requestOptions);
      const data = await response.json();
      if (data.token) {
        console.log("user:" + data.firstName + " " + data.lastName);
        console.log("token:" + data.token);
        authenticationHandler({ authtenticated: true, user: data.firstName + " " + data.lastName, userImage: data.image });
        navigate('/success');
      } else {
        console.log('ERROR');
      }

    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setBtnDisabled(values.username.length > 0 && values.password.length > 0 ? '' : 'disabled');
  };

  const onPaste =(e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setBtnDisabled(values.username.length > 0 && values.password.length > 0 ? '' : 'disabled');
  }

  return (
    <div className="main-container-login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            onPaste={onPaste}
          />
        ))}
        <button disabled={btnDisabled}>Access</button>
      </form>
    </div>
  );
};