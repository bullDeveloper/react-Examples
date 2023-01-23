export  const inputs = [
    {
      id: 1,
      name: "ci",
      type: "text",
      placeholder: "ci",
      errorMessage:
        "ci should be 3-16 characters and shouldn't include any special character!",
      label: "Cedula de identidad",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "name",
      type: "name",
      placeholder: "name",
      errorMessage:
        "Name should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Nombres",
      /*pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,*/
      required: true,
    },
    {
      id: 3,
      name: "lastName",
      type: "lastName",
      placeholder: "lastName",
      errorMessage:
        "LastName should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Apellido",
      /*pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,*/
      required: true,
    },
    {
      id: 4,
      name: "adress",
      type: "adress",
      placeholder: "adress",
      errorMessage:
        "adress should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Direccion",
      /*pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,*/
      required: true,
    }
  ];

