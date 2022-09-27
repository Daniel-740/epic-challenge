import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { CameraType } from '..';
import {renderWithProviders } from '../../../helpers/test'

test('render CameraType container', () => {

     const  component = renderWithProviders(<CameraType />)
     expect(component).toMatchSnapshot();
})