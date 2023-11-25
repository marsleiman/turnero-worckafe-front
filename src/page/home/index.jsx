import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarComponent from "../../components/navbar";

export default function Home() {
  const navigate = useNavigate();
  const [navBar, setNavbar] = useState(localStorage.getItem("token") ? true : false);

  useEffect(() => {
    console.log(localStorage.getItem("token"));
    if (!navBar) {
      navigate('/login')
    }
  }, []);

  return (
    <>
      {navBar && <NavBarComponent />}
    </>
  )
}
