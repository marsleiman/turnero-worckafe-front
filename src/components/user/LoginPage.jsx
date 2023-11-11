import { useState } from "react";

const LoginPage = (props) => {
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

    const handleChande = (event) => {
        setLogin((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value,
        }));
    }

    return (
       <form onSubmit={(event) => {event.preventDefault(); console.log('login', login);}}>
        <h2>Login</h2> <br />
        <input
            type="email"
            name="email"
            placeholder="Email"
            value={login.email}
            onChange={handleChande}    
        ></input> <br />
        <input
            type="password"
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={handleChande}    
        ></input> <br />
        <button type="submit">Login</button>
       </form>
    )
}

export default LoginPage;