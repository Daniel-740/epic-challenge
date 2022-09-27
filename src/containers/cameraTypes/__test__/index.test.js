import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { CameraTypes } from '..';
import {renderWithProviders } from '../../../helpers/test'

test('render CameraTypes container', () => {

     const  component = renderWithProviders(<CameraTypes />)
     expect(component).toMatchSnapshot();
})