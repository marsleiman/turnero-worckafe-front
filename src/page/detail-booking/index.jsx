import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import detailBooking from "../../servicies/detailBooking";
import Spinner from "../../components/spinner";
import ComponentDetail from "../../components/detail";
import Card from "../../components/card";
import NavBarComponent from "../../components/navbar";

export default function DetailBooking() {
  const [spinner, setSpinner] = useState(true);
  const [detail, setDetail] = useState({});
  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);

  useEffect(() => {
    const call = async () => {
      const respo = await detailBooking(searchParams.get("id"));
      console.log("respo", respo);
      setDetail(respo);
    };

    try {
      call();
    } catch {
      setDetail(null);
    }
    setSpinner(false);
  }, []);

  function CheckExist() {
    if (!detail) {
      return <span>Reserva no encontrada</span>;
    } else {
      return (
        <>
          <NavBarComponent />

          <>
            <Card title="Tu reserva" backgroundImage="images/login2.jpg">
              <div className="font-mono text-lg flex-col items-center justify-center py-16">
                <ComponentDetail detail={detail} />
              </div>
            </Card>
          </>
        </>
      );
    }
  }

  return <>{spinner ? <Spinner /> : <CheckExist />}</>;
}
