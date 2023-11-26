import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBarComponent from "../../components/navbar";
import ReservasList from "../../components/reservas/ReservasList";
import Card from "../../components/card";
import Spinner from "../../components/spinner";
export default function Home() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState({});
  const [spiner, setSpiner] = useState(true);

  const callBookings = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    };

    await fetch(
      "http://localhost:4000/api/bookings/find-for-user",
      requestOptions
    )
      .then((response) => {
        console.log(response);
        return response.text();
      })
      .then((data) => {
        console.log("data", data);
        const newData = JSON.parse(data);
        setBookings(newData);
        return newData;
      });
  };

  useEffect(() => {
    console.log(localStorage.getItem("token"));
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      callBookings();
      setTimeout(() => setSpiner(false), 10000);
    }
  }, []);

  return (
    <>
      <NavBarComponent />

      <Card
        title="Bienvenido!"
        subtitle="Esta es tu lista de reservas"
        backgroundImage="/images/test2.jpeg"
      >
        {spiner ? (
          <>
            <span className="font-mono text-md flex items-center justify-center">
              cargando
            </span>
            <Spinner className />
          </>
        ) : (
          <>
            <ReservasList bookings={bookings} />

            <Link to="/create-booking">
              {" "}
              <button className="bg-[#6F8F72] font-mono rounded-xl py-2 hover:scale-105 duration-300">
                Crear Reserva{" "}
              </button>
            </Link>
          </>
        )}
      </Card>
    </>
  );
}
