import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import ReactRouter from './ReactRouter'

// helper function
const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}

// tests
describe('ReactRouter component renders', () => {
    it('home and about page renders', () => {
        renderWithRouter(<ReactRouter />)
        
        expect(screen.getByTestId('home-page')).toBeInTheDocument()
        const leftClick = { button: 0 }

        userEvent.click(screen.getByText(/about/i), leftClick)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
    })

    it('No match page renders', () => {
        renderWithRouter(<ReactRouter /> , {route: '/some/bad/route'})
        expect(screen.getByTestId('no-match-page')).toBeInTheDocument()
    })
})