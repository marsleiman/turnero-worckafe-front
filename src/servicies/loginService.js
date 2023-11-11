import React from 'react'

const loginService = async (url, login) => {
  console.log('--------', login);
  fetch("http://localhost:4000/api/usersCol/login/",login)
  .then(response => {
      console.log(response);
      if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
      }
      return response.text();
  })
  .then(data => {
      console.log('Respuesta del servidor: ',data);
  })

  // try {
  //   const response = await fetch(url, login);
  //   if (response.ok) {
  //     const newData = await response.json();
  //     console.log(newData);
  //   } else {
  //     console.error("Error al obtener datos");
  //   }
  // } catch (error) {
  //   console.error("Error al obtener datos", error);
  // }
}

export default loginService;