import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import {AppContextProvider} from './appContext'

test('renders App with no errors', () => {
  render(<AppContextProvider><Router><App /></Router></AppContextProvider>)
})
