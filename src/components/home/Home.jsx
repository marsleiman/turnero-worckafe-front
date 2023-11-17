import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
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
  }

  return (
    <div>
      <button onClick={handleCloseSesion}>Cerrar sesión</button>
      <h1>Hola!</h1>
      <p>Ver mis Reservas:</p>
      <Link></Link>
      <p>Hacer una Reserva:</p>
    </div>
  );
};

export default Home;