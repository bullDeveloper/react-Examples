import React, { useState } from "react";
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';
import { inputs } from "./AddUserData";
import Sidebar from '../components/common/Sidebar'
import FormInput from "../components/common/FormInput";
import './Add-User.css'

const RegisterUser = () => {

  const options = [
    { value: 'Ingeniero', label: 'Ingeniero' },
    { value: 'Tester', label: 'Tester' },
    { value: 'Lider', label: 'Lider' }
  ]

  const navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState('disabled');
  const [values, setValues] = useState({
    ci: "",
    name: "",
    lastName: "",
    adress: ""
  });
  const [valueSelect, setSelectValue] = useState({
    position: ""
  });

  const handleChangeSelected = (e) => {
    setSelectValue({ position: e.value });
    setBtnDisabled(values.ci.length > 0 && values.name.length > 0 && values.lastName.length > 0 && values.adress.length > 0 && valueSelect.position.length > 0 ? '' : 'disabled');
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setBtnDisabled(values.ci.length > 0 && values.name.length > 0 && values.lastName.length > 0 && values.adress.length > 0 && valueSelect.position.length > 0 ? '' : 'disabled');
  };

  const onPaste = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setBtnDisabled(values.ci.length > 0 && values.name.length > 0 && values.lastName.length > 0 && values.adress.length > 0 && valueSelect.position.length > 0 ? '' : 'disabled');
  };

  async function handleSubmit(event) {
    event.preventDefault();
    navigate("/add-user-success", { state: { ci: values.ci, name: values.name, lastName: values.lastName, adress: values.adress, position: valueSelect.position } });
    console.log("Y se marcho!")
  }

  return (
    <>
      <Sidebar />
      <div className="main-container-add-user">
        <form onSubmit={handleSubmit}>
          <h1>Registro de Usuario</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              onPaste={onPaste}
            />
          ))}
          <div className="form-input-container">
            <label className="form-input-label">Cargo</label>
            <Select className="form-input" options={options} onChange={(choice) => handleChangeSelected(choice)} />
          </div>
          <button disabled={btnDisabled}>
            Agregar Usuario
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterUser;
