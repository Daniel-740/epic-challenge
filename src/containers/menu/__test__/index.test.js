import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import { Menu } from '../';
import userEvent from '@testing-library/user-event'
import {renderWithProviders } from '../../../helpers/test'

test('render menu', () => {

     const component = renderWithProviders(<Menu />)

     expect(component).toMatchSnapshot();
})

test('preess click link router', async () => {

     const component = renderWithProviders(<Menu />)
     await userEvent.click(screen.getByText(/Cameras/i))

     expect(component).toMatchSnapshot();
})