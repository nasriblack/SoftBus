import { describe, it } from 'vitest';
import { render, screen, renderHook, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { WrappedApp, App } from './App';
import BusTicketScreen from './pages/BusTicket/BusTicket';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { renderWithClient } from './utils/HelpersTesting';

describe('App work fine', () => {
  it('Render the App', () => {
    render(<WrappedApp />);
  });

  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');
  });
});

describe('Ticket Seat Screen', () => {
  test('successful query component', async () => {
    const result = renderWithClient(<BusTicketScreen />);
    expect(await result.findByTestId('seats-element-test')).toBeInTheDocument();
  });
});
