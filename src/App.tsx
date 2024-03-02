import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Home from './pages/Home';
import TicketSeat from './pages/BusTicket/BusTicket';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
