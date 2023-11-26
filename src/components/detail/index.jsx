import React, { useState, useEffect } from 'react'
import deleteBooking from "../../servicies/deleteBooking";

export default function ComponentDetail({ detail }) {
    const [detailProces, setDetailProces] = useState(detail);
    const [resp, setResp] = useState();

    const call = async () => {
        const respons = await deleteBooking(detail._id);
        console.log('respo', respons);
        setResp(respons)
    } 
    
    const handleDelte = async (event) => {
        event.preventDefault();

        try {
            call();
        } catch {
            setResp(null)
        }

        setDetailProces(null)
    }

    function DetailComp() {
        return <>
            <span>{detail.dia}</span>
            <span>{detail.room_id}</span>
            <span>{detail.capacity}</span>
            <button onClick={(e) => handleDelte(e)}>Cancelar Reserva</button>
        </>
    }

    function CheckExist() {
        if (!detailProces && !resp) {
          return <span>No existe la reserva :s</span>
        } else if (!detailProces && resp) {
            return <span>Reserva cancelada!</span>
        }
      }

    return (
        <>
            {detailProces && <DetailComp />}
            {<CheckExist />}
        </>
    )
}
