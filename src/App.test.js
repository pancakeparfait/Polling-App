import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

test('renders learn react link', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});
