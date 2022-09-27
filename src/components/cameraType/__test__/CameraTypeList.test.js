import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { CameraTypeList } from '../CameraTypeList';
import {renderWithProviders } from '../../../helpers/test'
import { fireEvent, act } from "@testing-library/react";

const props = {
     cancelSearch: jest.fn(),
     requestSearch: jest.fn(), 
     data: [{
          id: '6465442',
          name: 'dummy-camera',
          description: 'test description'
     }], 
     searched: '',
     navigate: jest.fn(), 
     onDelete: jest.fn()
}

test('render CameraTypeList', () => {
     
     const component = renderWithProviders(<CameraTypeList {...props} />)

     expect(component).toMatchSnapshot();
})

test('click delete Button', () => {
     const component = renderWithProviders(<CameraTypeList {...props} />)
     const button = component.getByRole('button', {name: /delete_button/i});

     fireEvent.click(button);
     expect(props.onDelete).toHaveBeenCalled();
})

test('click edit Button', () => {
     const component = renderWithProviders(<CameraTypeList {...props} />)
     const button = component.getByRole('button', {name: /edit_button/i});

     fireEvent.click(button);
     expect(props.navigate).toHaveBeenCalled();
})

test('search bar value', () => {
     const component = renderWithProviders(<CameraTypeList {...props} />)
     const searchBar = component.getByPlaceholderText('Search...');

     fireEvent.change(searchBar, { target: { value: 'test' } })
  
     expect(props.requestSearch).toHaveBeenCalled()
     expect(searchBar.value).toBe('test')
})