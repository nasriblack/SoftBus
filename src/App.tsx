import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TicketSeat from './pages/BusTicket/BusTicket';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ticket-seat" element={<TicketSeat />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
