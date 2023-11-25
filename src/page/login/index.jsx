import React, { useEffect, useState } from 'react'
import LoginPage from "../../components/user/LoginPage"
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [cookie, setCookie] = useState(localStorage.getItem("token"));

  return (
    <LoginPage />
  )
}
