import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { CameraTypeForm } from '../CameraTypeForm';
import {renderWithProviders } from '../../../helpers/test'
import { CameraTypeSchema } from '../../../helpers/YupSchemas/cameraType'
import { fireEvent, act, waitFor } from "@testing-library/react";

const props = {
          CameraTypeSchema,
          onSubmitCameraType: jest.fn(),
          data: false
     }

test('render form', () => {

     const  component = renderWithProviders(<CameraTypeForm {...props}/>)
     expect(component).toMatchSnapshot();
})

test('events inputs', async () => {

     const component = renderWithProviders(<CameraTypeForm {...props}/>)
     const inputName = component.getByTestId('input_name');
     const inputDescription = component.getByTestId('input_description');

     await act(async() => {

          fireEvent.change(inputName, {
               target: {
                    value: 'dummy-name'
               }
          })

          fireEvent.change(inputDescription, {
               target: {
                    value: 'dummy-description'
               }
          })

          expect(inputName.value).toBe('dummy-name');
          expect(inputDescription.value).toBe('dummy-description');
     })

     expect(component).toMatchSnapshot();
})

test('event submit', async () => {

     const component = renderWithProviders(<CameraTypeForm {...props}/>)
     const inputName = component.getByTestId('input_name');
     const inputDescription = component.getByTestId('input_description');
     const button = component.getByRole('button', {name: /button_submit/i})

     await act(async() => {

          fireEvent.change(inputName, {
               target: {
                    value: 'dummy-name'
               }
          })

          fireEvent.change(inputDescription, {
               target: {
                    value: 'dummy-description'
               }
          })

          fireEvent.click(button)
     })

     expect(props.onSubmitCameraType).toHaveBeenCalled();
})

test('error field', async () => {

     const component = renderWithProviders(<CameraTypeForm {...props}/>)
     const inputName = component.getByTestId('input_name');
     const inputDescription = component.getByTestId('input_description');
     const button = component.getByRole('button', {name: /button_submit/i})

     await act(async() => {

          fireEvent.change(inputName, {
               target: {
                    value: ''
               }
          })

          fireEvent.change(inputDescription, {
               target: {
                    value: ''
               }
          })

          fireEvent.click(button)

     })

     await waitFor(() =>{
          expect(component.getByText('Name required')).not.toBeNull();
          expect(component.queryByText('Description required')).not.toBeNull()
     })
})

test('edit form', async () => {
     props.data = {
          id: '54as5d45',
          name: 'some-name',
          description: 'some-description'
     }

     const component = renderWithProviders(<CameraTypeForm {...props}/>)
     const inputName = component.getByTestId('input_name');
     const inputDescription = component.getByTestId('input_description');
     const button = component.getByRole('button', {name: /button_submit/i})

     await act(async() => {

          fireEvent.change(inputName, {
               target: {
                    value: 'some-name'
               }
          })

          fireEvent.change(inputDescription, {
               target: {
                    value: 'some-description'
               }
          })

          fireEvent.click(button)

     })

     expect(props.onSubmitCameraType).toHaveBeenCalled();
})