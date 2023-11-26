import React from "react";
import { Link } from "react-router-dom";

export default function ReservasList(props) {
  console.log(props);
  return (
    <ul className="reservas-list">
      {props.bookings.map((reserva) => {
        return (
          <div className="overflow-y-scroll font-mono text-md flex flex-col items-center gap-4 mt-4 py-2 bg-[#fefae0] rounded ">
            {reserva.dia}
            <Link to="/detail-booking">
              <button className="bg-gray-500 overflow-y-scroll">
                <span>Ver detalles</span>
              </button>
            </Link>
          </div>
        );
      })}
    </ul>
  );
}
