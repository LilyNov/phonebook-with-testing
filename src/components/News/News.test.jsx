import React from 'react'
import axios from 'axios'
import { render, act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import News from './News'

jest.mock('axios')

const hits = [{
    objectID: '1',
    title: 'React'
}
]

describe('News component', () => {
    it('fetch news successe', async () => {
        const promise = Promise.resolve({ data: { hits } })
        axios.get.mockImplementationOnce(() => promise)
        render(<News />)
        
        userEvent.click(screen.getByTestId('btn-fetch-news'))

        await act(() => promise)
        
        expect(screen.getByTestId('item-of-news')).toBeInTheDocument()
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(axios.get).toHaveBeenCalledWith("http://hn.algolia.com/api/v1/search?query=React")
    })

    it('fetch news error', async () => {
        axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
        render(<News />)
        
        userEvent.click(screen.getByTestId('btn-fetch-news'))
        
        const message = await screen.findByText(/Something went wrong/);
        expect(message).toBeInTheDocument();
        expect(screen.queryByTestId('item-of-news')).toBeNull()
        screen.debug()
    })
})