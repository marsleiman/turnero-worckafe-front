
const RegisterPage = (props) =>{
    const registerHandler = (event) => {
        event.preventDefault();
        const registro = {
            username: event.target.userName.value,
            email: event.target.email.value,
            password: event.target.password.value
        }

        const requestOptions = {
            method: "POST",
            headers: {'Content-Type': 'application/jason'},
            body: JSON.stringify(registro)
        }
        fetch("https://tp2-backend.azurewebsites.net/api/users/register",requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }
            return response.text();
        })
        .then(data => {
            console.log('Respuesta del servidor: ',data);
        })


    };
return (    
    <div>
        <form onSubmit={registerHandler}>
            <input type="email" name="email" placeholder="Email" /><br />
            <input type="password" name="password" placeholder="Password" /><br />
            <button type="submit">Register</button>
        </form>
    </div>
    );
}
export default RegisterPage;