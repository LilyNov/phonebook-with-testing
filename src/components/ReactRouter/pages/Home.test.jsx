import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from "react-redux";
import store from "../../../redux/store";
import Home from './Home'

describe('Home component', () => {
    it('Home renders', () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        )
        expect(screen.getByTestId('list-of-contacts')).toBeInTheDocument()
        expect(screen.getByText(/search contact/i)).toBeInTheDocument()
        screen.debug()
    })

    it('Typing in searchbox works', () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        )
        expect(screen.queryByDisplayValue(/Jack/i)).toBeNull()
        userEvent.type(screen.getByTestId('input-searchContact'), 'Jack')
        expect(screen.queryByDisplayValue(/Jack/i)).toBeInTheDocument()

    })

    it('search filter is working', async () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        )

        screen.debug()
        // expect(screen.getByText(/Hermione Kline/i)).toBeInTheDocument()
        // expect(screen.queryAllByTestId('userContacts')).toBeInTheDocument()
        // expect(screen.queryByText(/Eden Clements/i)).toBeInTheDocument()
        // userEvent.type(screen.getByTestId('input-searchContact'), 'Rosie')
        // expect(screen.queryByText(/Hermione Kline/i)).toBeNull()
        // expect(screen.queryByText(/Eden Clements/i)).toBeInTheDocument()
    })

})
