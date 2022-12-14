import React from 'react'
import { render } from '@testing-library/react'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
// As a basic setup, import your same slice reducers
import Store from '../store'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = Store,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>
               <MemoryRouter>
                    {children}
               </MemoryRouter>     
          </Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}