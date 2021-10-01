import { render, screen } from '@testing-library/react'
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
})