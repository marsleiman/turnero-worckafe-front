import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const NavBarComponent = () => {
  const navigate = useNavigate();
  const [, setCookie] = useState(localStorage.getItem("token") || null);

  const handleCloseSesion = () => {
    localStorage.removeItem("token");
    setCookie(null);
    navigate("/login");
  };

  return (
    <nav class="bg-orange-900 border-bg-orange-900 dark:bg-orange-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://st4.depositphotos.com/16781356/40357/v/950/depositphotos_403577868-stock-illustration-coffee-logo-design-vector-illustration.jpg"
            className="h-11 rounded-full"
            alt="Flowbite Logo"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-orange-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-green-300 rounded md:bg-transparent md:text-green-300 md:p-0 dark:text-white md:dark:text-green-300"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/listado-reservas/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-300 md:p-0 dark:text-white md:dark:hover:text-green-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Mis reservas
              </Link>
            </li>

            <li>
              {/* Botón de Cerrar sesión */}
              <button
                onClick={handleCloseSesion}
                className="+block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-300 md:p-0 dark:text-white md:dark:hover:text-green-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
