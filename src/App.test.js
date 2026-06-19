import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the core portfolio sections', () => {
  render(<App />);
  expect(screen.getByText(/Welcome to my Portfolio/i)).toBeInTheDocument();
  expect(screen.getByText(/Technical Skills/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
});
