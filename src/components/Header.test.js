import { render, screen } from '@testing-library/react'
import TestRenderer from 'react-test-renderer'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Header from './Header'
import { AppContextProvider } from '../appContext'

test('renders header title', () => {
  render(<AppContextProvider><Router><Header /></Router></AppContextProvider>)
  const linkElement = screen.getByText(/Pic Some/i)
  expect(linkElement).toBeInTheDocument()
});

test('header has two links', () => {
  const testRenderer = TestRenderer.create(<AppContextProvider><Router><Header /></Router></AppContextProvider>)
  const testInstance = testRenderer.root

  expect(testInstance.findAllByType(Link).length).toBe(2)
})

// 1st link (Pic Some)
test('header\'s 1st link redirects to /', () => {
  const testRenderer = TestRenderer.create(<AppContextProvider><Router><Header /></Router></AppContextProvider>)
  const testInstance = testRenderer.root

  expect(testInstance.findAllByType(Link)[0].props.to).toBe('/')
})

test('header\'s 1st link has app name (Pic Some)', () => {
  const testRenderer = TestRenderer.create(<AppContextProvider><Router><Header /></Router></AppContextProvider>)
  const testInstance = testRenderer.root

  expect(testInstance.findByType('h2').children).toStrictEqual(['Pic Some'])
})

// 2nd link (cart)
test('header\'s 2nd link redirects to /cart', () => {
  const testRenderer = TestRenderer.create(<AppContextProvider><Router><Header /></Router></AppContextProvider>)
  const testInstance = testRenderer.root

  expect(testInstance.findAllByType(Link)[1].props.to).toBe('/cart')
})
