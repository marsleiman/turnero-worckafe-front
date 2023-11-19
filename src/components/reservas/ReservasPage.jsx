import "./Reserva.css";
//import Reserva from "./Reserva";
import Reserva from "./ReservaTest";
import NavBarComponent from '../navbar';



export default function ReservasPage(){
    return (
        <> <NavBarComponent />
        <ul className="reservas-list">
            {Reserva.map(reserva => {
                return (
                    <h1>
                        {reserva.id}
                    </h1>
                );
            })}
       </ul> 
        </>
       
    );
}