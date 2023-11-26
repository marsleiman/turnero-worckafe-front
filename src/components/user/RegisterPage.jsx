import { useState } from "react";
import registerService from "../../servicies/registerService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../card";
import Spinner from "../spinner";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);
  const [register, setRegister] = useState({
    username: "",
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
    await registerService(register);
    setSpinner(true);
    setTimeout(() => navigate("/"), 10000);
  };

  const ComponentSpinner = () => (
    <>
      <Spinner />
      <span className="font-mono text-lg flex: flex items-center">
        El usuario se está creando, serás redirigido al Login
      </span>
    </>
  );

  return (
    <>
      {spinner ? (
        <ComponentSpinner />
      ) : (
        <Card
          title="Bienvenido"
          subtitle="al work-café"
          backgroundImage="/images/test2.jpeg"
        >
          <form class="flex flex-col gap-4">
            <input
              class="p-2 mt-8 font-mono rounded-xl border"
              type="name"
              name="username"
              placeholder="Nombre"
              onChange={(e) => handleChange(e)}
            />
            <input
              className="p-2 mt-8 font-mono rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => handleChange(e)}
            />

            <input
              className="p-2 mt-5 font-mono rounded-xl border"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />
          </form>
          <button
            class="bg-[#6F8F72] font-mono flex items-center justify-center rounded-xl py-2 hover:scale-105 duration-300"
            onClick={(e) => handleSubmit(e)}
          >
            Registrarme
          </button>
        </Card>
      )}
    </>
  );
};

export default RegisterPage;
