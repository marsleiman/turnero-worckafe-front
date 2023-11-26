const registerService = async (register) => {
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
          throw new Error('La solicitud no fue exitosa, register');
      }
      return response.text();
  })
  .then(data => {
        const newData = JSON.parse(data);
        console.log("NewData", newData);
        return newData;
  })
}

export default registerService;