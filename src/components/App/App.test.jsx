import { render } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";



import App from './App'

describe('App component', () => {
    it('App renders', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      )
        
    })


})
