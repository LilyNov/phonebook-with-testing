import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactsList from './ContactsList'

const contacts = [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }]


describe('ContactsList component', () => {
    it('ContactList renders', () => {
        render(<ContactsList contacts={contacts} />)
        expect(screen.getByRole('list')).toBeInTheDocument()
        expect(screen.getByText(/Rosie Simpson/i)).toBeInTheDocument()
        
    })

    it('ContactList renders without contacts', () => {
        render(<ContactsList />)
        expect(screen.queryByRole('list')).toBeInTheDocument()
        expect(screen.queryByText(/Rosie Simpson/i)).toBeNull()
    })

    it('is contact delete', () => {
        const onClick = jest.fn()
        render(<ContactsList contacts={contacts} handleDeleteContact={onClick} />)

        expect(screen.queryByText(/delete/i)).toBeInTheDocument()
        expect(screen.queryByText(/Rosie Simpson/i)).toBeInTheDocument()

        userEvent.click(screen.queryByRole('button'))
        
        expect(onClick).toHaveBeenCalled()
        expect(screen.queryByDisplayValue(/Rosie Simpson/i)).toBeNull()
    })
})