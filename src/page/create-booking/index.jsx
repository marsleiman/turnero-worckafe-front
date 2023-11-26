import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card";

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

    const requestOptions = {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem("token")
      },
      body: JSON.stringify(booking)
    }

    const response = await fetch("http://localhost:4000/api/bookings/create", requestOptions)
      .then(response => {
          console.log(response);
          return response.text();
      })
      .then(data => {
          console.log("data", data);
          const newData = JSON.parse(data);
          return newData;
      })
    
    setSpinner(true);
    console.log('EN EL FRONT ', response, response.insertedId);
    const id = response.insertedId;
    const url = `/detail-booking?id=${id}`;
    console.log('EN EL url ', url);
    setTimeout(() => navigate(`/detail-booking?id=${id}`), 5000);
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
