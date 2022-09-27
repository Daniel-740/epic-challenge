import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { Cameras } from '..';
import {renderWithProviders } from '../../../helpers/test'

test('render Cameras', () => {

     const  component = renderWithProviders(<Cameras />)
     expect(component).toMatchSnapshot();
})