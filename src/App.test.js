import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';

test('renders home page title', () => {
  render(<Router><App /></Router>);
  const linkElement = screen.getByText(/Images go here/i);
  expect(linkElement).toBeInTheDocument();
});
