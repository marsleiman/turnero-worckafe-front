
const LoginPage = (props) => {
    const handlerLogin = (event) =>{
        event.preventDefault();
        const login ={
            email: event.target.email,
            password: event.target.password
        }
    }
    return (
       <form>
        <h2>Login</h2> <br />
        <input type="email" name="email" placeholder="Email"></input> <br />
        <input type="password" name="password" placeholder="Password"></input> <br />
        <button onClick={(event) => {handlerLogin(event)}}>Login</button>
       </form>
    )
}

export default LoginPage;