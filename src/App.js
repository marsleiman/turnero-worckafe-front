import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import Login from "./page/login";
import AllBookings from "./page/all-bookings";
import CreateBooking from "./page/create-booking";
import DetailBooking from "./page/detail-booking";
import BookingForUser from "./page/booking-for-user";
import Register from "./page/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all-bookings" element={<AllBookings />} />
        <Route path="/create-booking" element = { <CreateBooking />} />
        <Route path="/booking-for-user" element = {<BookingForUser />} />
        <Route path="/detail-booking" element = {<DetailBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
