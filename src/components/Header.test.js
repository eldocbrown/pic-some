import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header title', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Pic Some/i);
  expect(linkElement).toBeInTheDocument();
});
