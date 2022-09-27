import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { Camera } from '../';
import {renderWithProviders } from '../../../helpers/test'

test('render Camera', () => {

     const  component = renderWithProviders(<Camera />)
     expect(component).toMatchSnapshot();
})