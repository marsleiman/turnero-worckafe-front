
const LoginPage = (props) => {
    const handlerLogin = (event) =>{
        event.preventDefault();
        const login ={
            email: event.target.email.value,
            password: event.target.password.value
        }
    }
    return (
       <form onSubmit={handlerLogin}>
        <h2>Login</h2> <br />
        <input type="email" name="email" placeholder="Email"></input> <br />
        <input type="password" name="password" placeholder="Password"></input> <br />
        <button type="submit">Login</button>
       </form>
    )
}

export default LoginPage;