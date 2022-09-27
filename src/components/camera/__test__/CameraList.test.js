import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { CamerasList } from '../CamerasList';
import {renderWithProviders } from '../../../helpers/test'
import { fireEvent, act } from "@testing-library/react";

const props = {
     cancelSearch: jest.fn(),
     requestSearch: jest.fn(), 
     data: [{
          id: '6465442',
          name: 'dummy-camera',
          cameraType: '545a4s5da5',
          model: "some-model",
          brand: "some-brand",
          ubication: "dummy-ubication",
          longitude: "some-longitude",
          latitude: "some-latitude"
     }], 
     searched: '',
     navigate: jest.fn(), 
     cameraTypes: [{
          id: '545a4s5da5',
          name: 'some-type',
          description: 'some test description'
     }],
     onDelete: jest.fn()
}

test('render CamerasList', () => {
     
     const component = renderWithProviders(<CamerasList {...props} />)

     expect(component).toMatchSnapshot();
})

test('click delete Button', () => {
     const component = renderWithProviders(<CamerasList {...props} />)
     const button = component.getByRole('button', {name: /delete_button/i});

     fireEvent.click(button);
     expect(props.onDelete).toHaveBeenCalled();
})

test('click edit Button', () => {
     const component = renderWithProviders(<CamerasList {...props} />)
     const button = component.getByRole('button', {name: /edit_button/i});

     fireEvent.click(button);
     expect(props.navigate).toHaveBeenCalled();
})

test('search bar value', () => {
     const component = renderWithProviders(<CamerasList {...props} />)
     const searchBar = component.getByPlaceholderText('Search...');

     fireEvent.change(searchBar, { target: { value: 'test' } })
  
     expect(props.requestSearch).toHaveBeenCalled()
     expect(searchBar.value).toBe('test')
})