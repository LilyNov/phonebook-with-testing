import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from './Home'

describe('Home component', () => {
    it('Home renders', () => {
        render(<Home />)
        expect(screen.getByTestId('list-of-contacts')).toBeInTheDocument()
        expect(screen.getByText(/search contact/i)).toBeInTheDocument()
    })

    it('Typing in searchbox works', () => {
        render(<Home />)
        expect(screen.queryByDisplayValue(/Jack/i)).toBeNull()
        userEvent.type(screen.getByRole('textbox'), 'Jack')
        expect(screen.queryByDisplayValue(/Jack/i)).toBeInTheDocument()

    })

    it('search filter is working', () => {
        render(<Home />)
        expect(screen.getByText(/Hermione Kline/i)).toBeInTheDocument()
        expect(screen.getByText(/Eden Clements/i)).toBeInTheDocument()
        userEvent.type(screen.getByRole('textbox'), 'Eden')
        expect(screen.queryByText(/Hermione Kline/i)).toBeNull()
        expect(screen.queryByText(/Eden Clements/i)).toBeInTheDocument()
    })

})
