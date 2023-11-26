import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import detailBooking from "../../servicies/detailBooking";
import Spinner from "../../components/spinner"

export default function DetailBooking() {
  const [spinner, setSpinner] = useState(true);
  const [detail, setDetail] = useState({});
  const search = useLocation().search
  const searchParams = new URLSearchParams(search)


  useEffect(() => {
    const call = async () => {
      const respo = await detailBooking(searchParams.get('id'));
      await console.log('respo', respo);
      await setDetail(respo)
    } 
    
    call();
    setSpinner(false);
  }, [])

  console.log(':(', detail);

  const componentDetail = (
    <>
      <span>{detail.dia}</span>
      <span>{detail.room_id}</span>
      <span>{detail.capacity}</span>
    </>
  )

  return (
    <>
      {spinner ? <Spinner /> : componentDetail}
    </>
  )
}
