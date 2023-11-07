import { Link } from "react-router-dom";
import './User.css';

const User = (props) =>{

   return (
        <li className='user-item'>
            <div className='card user-item__content'>
               <Link to={`/users/${props.Id}`}>
                  <div className='user-item__image avatar'>
                     <img src={props.Picture} />                     
                  </div>
                  <div className='user-item__info'>
                     <h2>{props.UserName}</h2>
                     <h3>{props.Title}</h3>
                     <h3>{contador}</h3>
                  </div>
               </Link> 
            </div>
        </li>
     );
};

export default User;
