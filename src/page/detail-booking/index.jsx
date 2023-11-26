import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import detailBooking from "../../servicies/detailBooking";
import Spinner from "../../components/spinner"
import ComponentDetail from "../../components/detail"

export default function DetailBooking() {
  const [spinner, setSpinner] = useState(true);
  const [detail, setDetail] = useState({});
  const search = useLocation().search
  const searchParams = new URLSearchParams(search)


  useEffect(() => {
    const call = async () => {
      const respo = await detailBooking(searchParams.get('id'));
      console.log('respo', respo);
      setDetail(respo)
    } 
    
    try {
      call();
    } catch {
      setDetail(null)
    }
    setSpinner(false);
  }, [])

  console.log(':(', detail);


  function CheckExist() {
    if (!detail) {
      return <span>No existe la reserva :s</span>
    } else {
      return <ComponentDetail detail={detail} />
    }
  }

  return (
    <>
      {spinner ? <Spinner /> : <CheckExist />}
    </>
  )
}
