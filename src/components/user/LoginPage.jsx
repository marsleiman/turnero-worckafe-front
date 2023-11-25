import React, {useEffect} from "react";
import { useState } from "react";
import Card from "../card";
import loginService from "../../servicies/loginService";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [cookie, setCookie] = useState(localStorage.getItem("token"));
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("cookie en loginPage", cookie);
    if (cookie) {
      navigate("/");
    }
  }, [cookie]);

  const handleChange = (event) => {
    setLogin((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("holaaaaaaaa");
    await loginService(login);
    navigate("/login");
  };

  return (
    <Card
      title="Bienvenido"
      subtitle="al work-café"
      backgroundImage="/images/test.jpeg"
    >
      <form class="flex flex-col gap-4">
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
          value={login.password}
          onChange={handleChange}
        />

        <button
          class="bg-[#6F8F72] font-mono rounded-xl py-2 hover:scale-105 duration-300"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>

      <div className="mt-10 grid grid-cols-1 items-center text-black font-mono">
        <hr class="border-gray-500"></hr>
        <hr class="border-gray-500"></hr>
        <p class="font-mono text-sm flex items-center justify-center p-4">
          No estás registrado?
        </p>
        <Link
          to="/register"
          class="font-bold flex items-center justify-center py-1 hover:scale-105 duration-100"
        >
          <button>Registrarme</button>
        </Link>
      </div>
    </Card>
  );
};

export default LoginPage;
