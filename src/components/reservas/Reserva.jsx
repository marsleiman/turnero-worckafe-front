import { Link } from "react-router-dom";
import './Reserva.css';

const Reserva = (props) =>{

   return (
        <li className='reserva-item'>
            <div className='card reserva-item__content'>
               <Link to={`/reservas/${props.Id}`}>
                  <div className='reserva-item__image avatar'>
                     <img src={props.Picture} />                     
                  </div>
                  <div className='reserva-item__info'>
                     <h2>{props.reservaName}</h2>
                  </div>
               </Link> 
            </div>
        </li>
     );
};

export default Reserva;