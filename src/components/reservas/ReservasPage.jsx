import "./Reserva.css";
//import Reserva from "./Reserva";
import Reserva from "./ReservaTest";



export default function ReservasPage(){
    return (
       <ul className="reservas-list">
            {Reserva.map(reserva => {
                return (
                    <h1>
                        {reserva.id}
                    </h1>
                );
            })}
       </ul> 
    );
}