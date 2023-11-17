
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/components/home/Home';
import LoginPage from './components/user/LoginPage';
import RegisterPage from './components/user/RegisterPage';
import ReservasPage from './components/reservas/ReservasPage';
import AllUsers from './components/allUsers';

function App() {
   
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path ="/login" element = {<LoginPage />} />
          <Route path="/listado-reservas/" element = { <ReservasPage /> } />
          { /*<Route path="/crear-reserva" element = { <CreateReserva />} />
          <Route path="/reserva/:reserva_id" element = {<ReservaDetails />} />*/
          <Route path="/register" element = {<RegisterPage/>} /> }
          <Route path="/allUsers" element = {<AllUsers/>} />
        </Routes>
      </BrowserRouter>    
    );
  }

export default App;

