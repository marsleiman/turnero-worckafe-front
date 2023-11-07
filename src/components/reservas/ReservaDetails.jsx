import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
 
const ReservaDetails = (props) => {
    const {id} = useParams();
    const [Reserva, setReserva] = useState({});

    useEffect(()=>{
       fetch("https://raw.githubReservacontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Reservas.json")
            .then(response => response.json())
            .then(data => 
                    setReserva(data.find(Reserva => Reserva["Object Id"] === id))
            )
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <img src={Reserva.Picture}  />
            <h3>{Reserva["Display name"]}</h3>
            <h3>{Reserva["Country/Region"]}</h3>      
        </>
    );
};

export default ReservaDetails;