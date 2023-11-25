import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBarComponent from "../../components/navbar";

export default function Home() {
  const navigate = useNavigate();
  const [cookie, setCookie] = useState(localStorage.getItem("token"));

  useEffect(() => {
    console.log("cookie en page home", cookie);
    if (!cookie) {
      navigate("/login");
    }
    console.log("local storage", localStorage.getItem("token"));
  }, []);

  return (
    <>
      {cookie && <NavBarComponent />}
    </>
  )
}
