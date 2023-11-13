import { useState } from "react";
import registerService from "../../servicies/registerService";


const RegisterPage = (props) =>{

    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        setRegister((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value,
        }));
    }
    const handleSubmit = (event) => {
        // event.preventDefault();
        // const url = 'http://localhost:4000/api/usersCol/'
        // RegisterService(url, Register);
    }

return (    
    <form onSubmit={handleSubmit}>
        <h2>Register</h2> <br />
        <input
            type="email"
            name="email"
            placeholder="Email"
            value={register.email}
            onChange={handleChange}    
        ></input>
        <br />
        <input
            type="password"
            name="password"
            placeholder="Password"
            value={register.password}
            onChange={handleChange}    
        ></input>
        <br />
        <input
            type="name"
            name="name"
            placeholder="Nombre"
            value={register.name}
            onChange={handleChange}    
        ></input>
        <br />
        <button type="submit">Register</button>
       </form>
    );
}
export default RegisterPage;