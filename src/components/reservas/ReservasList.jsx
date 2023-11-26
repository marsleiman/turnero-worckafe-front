import React from "react";
import { Link } from "react-router-dom";

export default function ReservasList(props) {
  return (
    <ul className="reservas-list">
      {props.bookings.map((reserva) => {
        return (
          <li className="overflow-y-scroll font-mono text-md flex flex-col items-center gap-4 mt-4 py-2 bg-[#fefae0] rounded ">
            <Link to={`/detail-booking?id=${reserva._id}`}>
              Reserva día: {reserva.dia}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
