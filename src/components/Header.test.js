import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header';

test('renders header title', () => {
  render(<Router><Header /></Router>);
  const linkElement = screen.getByText(/Pic Some/i);
  expect(linkElement).toBeInTheDocument();
});
