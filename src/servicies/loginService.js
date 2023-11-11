import React from 'react'



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
      sessionStorage.setItem("Token", newData.token);
      console.log("local storage", localStorage.getItem('Token'))
  })
}

export default loginService;