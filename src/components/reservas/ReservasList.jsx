import "./Reserva.css";
//import Reserva from "./Reserva";
import Reserva from "./ReservaTest";



export default function ReservasList(props){
    return (
       <ul className="reservas-list">
            {Reserva.map(reserva => {
                return (
                    <Reserva
                        Id = {reserva.id}                     
                    />
                );
            })}
       </ul> 
    );
}