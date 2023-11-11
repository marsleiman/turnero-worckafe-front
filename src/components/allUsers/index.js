import React from 'react'
import { useEffect } from 'react'




const AllUsers = () => {
    useEffect(()=>{
        const requestOptions = {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
        }
        fetch("http://localhost:4000/api/usersCol/",requestOptions)
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
    })
  return (
    <div>
        <h1> Hola </h1>
    </div>
  )
}

export default AllUsers;

