import Reserva from "./Reserva";

export default function ReservasList(props) {
  return (
    <ul className="reservas-list">
      {props.Reserva.map((reserva) => {
        return (
          <Reserva
            Id={reserva.room_id}
            fecha={reserva.dia}
            capacidad={reserva.capacity}
          />
        );
      })}
    </ul>
  );
}
