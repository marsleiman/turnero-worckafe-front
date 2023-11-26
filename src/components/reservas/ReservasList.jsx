import React from "react";
import { Link } from "react-router-dom";

export default function ReservasList(props) {
  console.log(props);
  return (
     <ul className="reservas-list">
       {props.bookings.map((reserva) => {
         return (
           <Link to={`/detail-booking?id=${reserva._id}`}>
             Reserva día: {reserva.dia}
           </Link>
         );
       })}
     </ul>

  );
}
