
const RegisterPage = (props) =>{
    const registerHandler = (event) => {
        event.preventDefault();
        const registro = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        }

        const requestOptions = {
            method: "POST",
            headers: {'Content-Type': 'application/jason'},
            body: JSON.stringify(registro)
        }
        fetch("http://localhost:4000/api/usersCol/register",requestOptions)
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
            <input type="name" name="name" placeholder="Name" /><br />
            <input type="email" name="email" placeholder="Email" /><br />
            <input type="password" name="password" placeholder="Password" /><br />
            <button type="submit">Register</button>
        </form>
    </div>
    );
}
export default RegisterPage;