import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactsList from './ContactsList'
import store from '../../redux/store'

// const contacts = [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }]
const contacts = store.getState().contacts.contacts


describe('ContactsList component', () => {
    it('ContactList renders', () => {
        render(<ContactsList contacts={contacts} />)
        screen.debug()
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

        expect(screen.getAllByText(/delete/i)[0]).toBeInTheDocument()
        expect(screen.queryByText(/Rosie Simpson/i)).toBeInTheDocument()

        userEvent.click(screen.queryAllByRole('button')[0])
        
        expect(onClick).toHaveBeenCalled()
        expect(screen.queryByDisplayValue(/Rosie Simpson/i)).toBeNull()
    })
})