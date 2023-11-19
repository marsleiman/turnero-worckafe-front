import { useState } from "react";
import registerService from "../../servicies/registerService";
import loginService from "../../servicies/loginService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "../home/Home";

const RegisterPage = (props) => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setRegister((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('llega?????');
    await registerService(register)
      .then(() => {
        let body = {
          email: register.email,
          password: register.password,
        }
        loginService(body);
        navigate("/");
      })
  }

  return (
    <Home>
      <form class="flex flex-col gap-4">
        <input
          class="p-2 mt-8 font-mono rounded-xl border"
          type="name"
          name="name"
          placeholder="Nombre"
          value={register.name}
          onChange={handleChange}
        />
        <input
          className="p-2 mt-8 font-mono rounded-xl border"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          className="p-2 mt-5 font-mono rounded-xl border"
          type="password"
          name="password"
          placeholder="Password"
          value={register.password}
          onChange={handleChange}
        />
      </form>
      <Link to="/">
        {" "}
        <button
          class="bg-[#6F8F72] font-mono flex items-center justify-center rounded-xl py-2 hover:scale-105 duration-300"
          onClick={handleSubmit}
        >
          Registrarme
        </button>
      </Link>
    </Home>
  );
};

export default RegisterPage;
