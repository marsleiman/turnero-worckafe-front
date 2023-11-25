import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBarComponent from "../../components/navbar";
import bookings from "./bookings";
import ReservasList from "../../components/reservas/ReservasList"

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("token"));
    if (!localStorage.getItem("token")) {
      navigate('/login')
    }
  }, []);

  return (
    <>
      <NavBarComponent />
      <h1>Bienvenido!</h1>
      <h3>Esta es tu lista de reservas:</h3>
      <ReservasList bookings={bookings} />
      <Link to="/create-booking">Crear Reserva</Link>
    </>
  )
}
