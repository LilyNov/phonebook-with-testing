import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Breadcrumbs from './Breadcrumbs'

// helper function
const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}

// tests
describe('Breadcrumbs component renders', () => { 
    it('rendering a component that uses useLocation', () => {
        const route = /home \/ some-route/i
        renderWithRouter(<Breadcrumbs />, {route})
        expect(screen.getByTestId('breadcrumbs')).toHaveTextContent(route)
})
})