import React, { useState, useEffect } from "react";
import deleteBooking from "../../servicies/deleteBooking";

export default function ComponentDetail({ detail }) {
  const [detailProces, setDetailProces] = useState(detail);
  const [resp, setResp] = useState();

  const call = async () => {
    const respons = await deleteBooking(detail._id);
    console.log("respo", respons);
    setResp(respons);
  };

  const handleDelte = async (event) => {
    event.preventDefault();

    try {
      call();
    } catch {
      setResp(null);
    }

    setDetailProces(null);
  };

  function DetailComp() {
    return (
      <>
        <div className="font-mono text-md flex flex-col items-center justify-center gap-4 mt-4 py-2 ">
          <ul class>Fecha: {detail.dia}</ul>
          <ul>Sala: {detail.room_id}</ul>
          <ul>Capacidad: {detail.capacity}</ul>
        </div>

        <button
          onClick={(e) => handleDelte(e)}
          className="bg-[#6F8F72] font-mono rounded-xl p-10 flex items-center justify-center py-2 mt-3 hover:scale-105 duration-300"
        >
          Cancelar Reserva
        </button>
      </>
    );
  }

  function CheckExist() {
    if (!detailProces && resp) {
      return <span>Reserva cancelada!</span>;
    }
  }

  return (
    <>
      {detailProces && <DetailComp />}
      {<CheckExist />}
    </>
  );
}
