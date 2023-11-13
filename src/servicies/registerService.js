import React from 'react'


const registerService = async (url, register) => {
  console.log('--------', register);
  const requestOptions = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(register)
}
  fetch("http://localhost:4000/api/usersCol/register",requestOptions)
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
        
  })
}

export default registerService;