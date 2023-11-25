import { useState } from "react";
import createBooking from "../../servicies/createBookingService";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card";
//import Spinner from "../spinner"

export default function CreateBooking() {
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);
  const [booking, setBooking] = useState({
    dia: "",
    room_id: "",
    capacity: "",
  });

  const handleChange = (event) => {
    setBooking((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createBooking(booking);
    setSpinner(true);
    //setTimeout(() => navigate('/'), 10000);
  };

  return (
    <>
      {
        spinner ? <span>cargando</span> :
          <Card
            title="Crea tu reserva"
            subtitle="para el work-café"
            backgroundImage="/images/test.jpeg"
          >
            <form class="flex flex-col gap-4">
              <input
                class="p-2 mt-8 font-mono rounded-xl border"
                type="name"
                name="dia"
                placeholder="Elegí el día en formato DD/MM/AA"
                onChange={(e) => handleChange(e)}
              />
              <input
                className="p-2 mt-8 font-mono rounded-xl border"
                type="name"
                name="room_id"
                placeholder="Elegí el número de sala"
                onChange={(e) => handleChange(e)}
              />

              <input
                className="p-2 mt-5 font-mono rounded-xl border"
                type="name"
                name="capacity"
                placeholder="Elegí la capacidad de personas"
                onChange={(e) => handleChange(e)}
              />
            </form>
              <button
                class="bg-[#6F8F72] font-mono flex items-center justify-center rounded-xl py-2 hover:scale-105 duration-300"
                onClick={(e) => handleSubmit(e)}
              >
                Crear reserva
              </button>
          </Card>
      }
    </>
  )
}
