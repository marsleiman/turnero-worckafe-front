//import Reserva from "./Reserva";
import NavBarComponent from "../navbar";
import ReservasList from "./ReservasList";
import { useState, useEffect } from "react";

const ReservasPage = async () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    // const requestOptions = {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: localStorage.getItem("token"),
    //   },
    // };
    fetch("http://localhost:4000/api/bookings/") //,requestOptions
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        return response.text();
      })
      .then((data) => {
        console.log("Respuesta del servidor: ", data);
        setBookings(data);
      });

    return (
      <>
        {" "}
        <NavBarComponent />
        <section className="bg-gray-500">
          <div>{<ReservasList Reserva={bookings} />}</div>
        </section>
      </>
    );
  });
};
export default ReservasPage;

// import NavBarComponent from "../navbar";
// import ReservasList from "./ReservasList";
// import { useEffect, useState } from "react";

// const ReservasPage = () => {
//   const [reservasData, setReservasData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const requestOptions = {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: localStorage.getItem("token"),
//           },
//         };

//         const response = await fetch(
//           "http://localhost:4000/api/bookings/",
//           requestOptions
//         );

//         if (!response.ok) {
//           throw new Error("La solicitud no fue exitosa");
//         }

//         const data = await response.json();
//         setReservasData(data);
//       } catch (error) {
//         console.error("Error al obtener datos:", error.message);
//       }
//     };

//     fetchData();
//   }, []); // el segundo parámetro del useEffect indica que se ejecuta solo una vez al montar el componente

//   return (
//     <>
//       <NavBarComponent />
//       <section className="bg-gray-500">
//         <ReservasList data={reservasData} />
//       </section>
//     </>
//   );
// };

// export default ReservasPage;
