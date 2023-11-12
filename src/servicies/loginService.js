import React from 'react'

const cookie = async (token) => {
  await localStorage.setItem("token", token);
  console.log('en la funcion cookie', token);
}

const loginService = async (url, login) => {
  console.log('--------', login);
  const requestOptions = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(login)
}
  fetch("http://localhost:4000/api/usersCol/login/",requestOptions)
  .then(response => {
      console.log(response);
      if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
      }
      return response.text();
  })
  .then(data => {
        const newData = JSON.parse(data);
        console.log("NewData", newData);
        console.log("NewData", newData.token);
        cookie(newData.token);
        // sessionStorage.setItem("Token", newData.token);
        console.log("local storage", localStorage.getItem('token'))
  })
}

export default loginService;