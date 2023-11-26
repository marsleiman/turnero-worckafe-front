import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import detailBooking from "../../servicies/detailBooking";
import Spinner from "../../components/spinner"

export default function BookingForUser() {
  const [spinner, setSpinner] = useState(true);
  const [bookings, setBookings] = useState({});
  const [compBookings, setCompBookings] = useState(false);
  const search = useLocation().search
  const searchParams = new URLSearchParams(search)
 
  const callBookings = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem("token")
      },
    }

    const response = await fetch("http://localhost:4000/api/bookings/find-for-user", requestOptions)
      .then(response => {
          console.log(response);
          return response.text();
      })
      .then(data => {
          console.log("data", data);
          const newData = JSON.parse(data);
          setBookings(newData);
          return newData;
      })
  }

  useEffect(() => {
    callBookings();
    setSpinner(false);
    setCompBookings(true);
  }, [])

  console.log(':(', bookings);

  const boking = () => {
    <>
      {
        bookings.map((e) => (
          console.log(e.dia),
          <span>{e.dia}</span>
        ))
      }
    </>
  }

  return (
    <>
      {spinner && <Spinner />}
      {compBookings && boking}
    </>
  )
}