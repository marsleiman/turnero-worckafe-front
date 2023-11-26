import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBarComponent from "../../components/navbar";
import ReservasList from "../../components/reservas/ReservasList"

export default function Home() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState({});
  const [spiner, setSpiner] = useState(true);


  const callBookings = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem("token")
      },
    }

    await fetch("http://localhost:4000/api/bookings/find-for-user", requestOptions)
      .then(response => {
        console.log(response);
        return response.text();
      })
      .then(data => {
        console.log("data", data);
        const newData = JSON.parse(data);
        setBookings(newData);
        return newData;
      })
  }

  useEffect(() => {
    console.log(localStorage.getItem("token"));
    if (!localStorage.getItem("token")) {
      navigate('/login')
    } else {
      callBookings();
      setTimeout(() => setSpiner(false), 10000);
    }
  }, []);


  return (
    <>
      {spiner ? <span>cargando</span> :
        (<>
          <NavBarComponent />
          <h1>Bienvenido!</h1>
          <h3>Esta es tu lista de reservas:</h3>
          <ReservasList bookings={bookings} />
          <Link to="/create-booking">Crear Reserva</Link></>)}
    </>
  )
}
