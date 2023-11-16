import { useState } from "react";
import registerService from "../../servicies/registerService";
import { Link } from "react-router-dom";
import Home from "../home/Home";

const RegisterPage = (props) => {
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
  const handleSubmit = (event) => {
    // event.preventDefault();
    // const url = 'http://localhost:4000/api/usersCol/'
    // RegisterService(url, Register);
  };

  return (
    <Home
      title="Bienvenido"
      subtitle="al work-café"
      backgroundImage="/images/test2.jpeg"
    >
      <p class="text-sm mt-4 font-mono flex items-center justify-center">
        {" "}
        Ingrese sus datos
      </p>

      <form onSubmit={handleSubmit} class="flex flex-col gap-4">
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
          type="submit"
        >
          Registrarme
        </button>
      </Link>
    </Home>
  );
};
export default RegisterPage;
