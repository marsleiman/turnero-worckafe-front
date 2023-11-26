import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import detailBooking from "../../servicies/detailBooking";
import Spinner from "../../components/spinner";

export default function DetailBooking() {
  const [spinner, setSpinner] = useState(true);
  const [detail, setDetail] = useState({});
  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);

  useEffect(() => {
    const call = async () => {
      const respo = await detailBooking(searchParams.get("id"));
      await setDetail(respo);
    };

    call();
    setSpinner(false);
  }, []);

  const componentDetail = (
    <>
      <li>{detail.dia}</li>
      <li>{detail.room_id}</li>
      <li>{detail.capacity}</li>
    </>
  );

  return <>{spinner ? <Spinner /> : componentDetail}</>;
}
