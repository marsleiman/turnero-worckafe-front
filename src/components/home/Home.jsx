import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

const Home = ({ title, subtitle, children, backgroundImage }) => {
  const navigate = useNavigate();
  const [cookie, setCookie] = useState(localStorage.getItem('token') || null)
  // CUANDO SE CIERRA LA SESION??? por eso dejamo el setCookie
  // SesionStorage o LocalStorage ?????
  useEffect(() => {
    if (cookie == '') {
      navigate("/login");
    }
    console.log("local storage", localStorage.getItem('token'))
  }, [cookie])

  const handleCloseSesion = () => {
    localStorage.removeItem('token');
    setCookie(null)
    navigate("/login");
  }

  return (
    <section className="bg-[#fefae0] min-h-screen flex items-center justify-center">
      <button onClick={handleCloseSesion}>Cerrar Sesión</button>
      <div className="bg-[#79B473] flex rounded-2xl shadow-lg max-w-3xl p-5">
        {/* login container */}
        <div className="md:w-1/2 px-12">
          <form className="flex flex-col gap-4">
            <h2 className="font-mono text-2xl flex items-center justify-center">{title}</h2>
            <h2 className="font-mono text-2xl flex items-center justify-center">{subtitle}</h2>
            {/* Resto del formulario */}
            {children}
          </form>

        </div>

        {/* image container */}
        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={backgroundImage} alt="" />
        </div>
      </div>
    </section>
  )
};

export default Home;