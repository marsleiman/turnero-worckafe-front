import "./Reserva.css";

const Reserva = (props) => {
  return (
    <li>
      <h2>{props.Id}</h2>
      <h2>{props.fecha}</h2>
      <h2>{props.capacidad}</h2>
    </li>
  );
};

export default Reserva;
