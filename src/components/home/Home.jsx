import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div>
        <h1>Bienvenido!</h1>
        <Link to="/login">Iniciar Sesión</Link>
        <Link to="/register">Registrarse</Link>
      </div>
    );
  };
  
  export default Home;