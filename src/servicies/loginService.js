const setLocalStorage = async (token) => {
  await localStorage.setItem("token", token);
  console.log("local storage", localStorage.getItem('token'))
}

const loginService = (login) => {
  const requestOptions = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(login)
}
  fetch("http://localhost:4000/api/usersCol/login/",requestOptions)
  .then(response => {
      console.log(response);
      if (!response.ok) {
          throw new Error('La solicitud no fue exitosa, login');
      }
      return response.text();
  })
  .then(data => {
        const newData = JSON.parse(data);
        console.log("NewData", newData.token);
        setLocalStorage(newData.token);
        return data;
  })
}

export default loginService;