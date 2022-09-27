import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { CameraForm } from '../CameraForm';
import {renderWithProviders } from '../../../helpers/test'
import { cameraSchema } from '../../../helpers/YupSchemas/camera'
import { fireEvent, act, waitFor } from "@testing-library/react";

const props = {
     cameraSchema, 
     onSubmitCamera: jest.fn(),
     data: false, 
     cameraTypes: 
          [{
               id: '15b54df5',
               name: 'test-name',
               description: 'some-description'
          },
          {
               id: '4o6456j',
               name: 'new name',
               description: 'dummy description'
          }]
     }

test('render Camera form', () => {

     const  component = renderWithProviders(<CameraForm {...props}/>)
     expect(component).toMatchSnapshot();
})

test('events inputs', async () => {

     const component = renderWithProviders(<CameraForm {...props}/>)
     const inputName = component.getByTestId('input_name');
     const inputCameraType = component.getByTestId('input_cameraType');
     const inputModel = component.getByTestId('input_model');
     const inputBrand = component.getByTestId('input_brand');
     const inputUbication = component.getByTestId('input_ubication');
     const inputLongitude = component.getByTestId('input_longitude');
     const inputLatitude = component.getByTestId('input_latitude');
     

     await act(async() => {
          fireEvent.change(inputName, {
               target: {
                    value: 'dummy-name'
               }
          })

          fireEvent.change(inputCameraType, {
               target: {
                    value: '15b54df5'
               }
          })

          fireEvent.change(inputModel, {
               target: {
                    value: 'dummy-model'
               }
          })

          fireEvent.change(inputBrand, {
               target: {
                    value: 'Kodak'
               }
          })

          fireEvent.change(inputUbication, {
               target: {
                    value: 'some-ubication'
               }
          })

          fireEvent.change(inputLongitude, {
               target: {
                    value: 'some-longitude'
               }
          }) 

          fireEvent.change(inputLatitude, {
               target: {
                    value: 'some-latitude'
               }
          }) 
     })

     expect(inputName.value).toBe('dummy-name');
     expect(inputCameraType.value).toBe('15b54df5');
     expect(inputModel.value).toBe('dummy-model');
     expect(inputBrand.value).toBe('Kodak');
     expect(inputUbication.value).toBe('some-ubication');
     expect(inputLongitude.value).toBe('some-longitude');
     expect(inputLatitude.value).toBe('some-latitude');

     expect(component).toMatchSnapshot();
})

test('submit form', async () => {
     const component = renderWithProviders(<CameraForm {...props}/>)
     const inputName = component.getByTestId('input_name');
     const inputCameraType = component.getByTestId('input_cameraType');
     const inputModel = component.getByTestId('input_model');
     const inputBrand = component.getByTestId('input_brand');
     const inputUbication = component.getByTestId('input_ubication');
     const inputLongitude = component.getByTestId('input_longitude');
     const inputLatitude = component.getByTestId('input_latitude');
     const button = component.getByRole('button', {name: /button_submit/i})

     await act(async() => {
          fireEvent.change(inputName, {
               target: {
                    value: 'dummy-name'
               }
          })

          fireEvent.change(inputCameraType, {
               target: {
                    value: '15b54df5'
               }
          })

          fireEvent.change(inputModel, {
               target: {
                    value: 'dummy-model'
               }
          })

          fireEvent.change(inputBrand, {
               target: {
                    value: 'Kodak'
               }
          })

          fireEvent.change(inputUbication, {
               target: {
                    value: 'some-ubication'
               }
          })

          fireEvent.change(inputLongitude, {
               target: {
                    value: 'some-longitude'
               }
          }) 

          fireEvent.change(inputLatitude, {
               target: {
                    value: 'some-latitude'
               }
          }) 

          fireEvent.click(button)
     })

     expect(component).toMatchSnapshot();
})

test('error field', async () => {

     const component = renderWithProviders(<CameraForm {...props}/>)
     const inputName = component.getByTestId('input_name');
     const inputCameraType = component.getByTestId('input_cameraType');
     const inputModel = component.getByTestId('input_model');
     const inputBrand = component.getByTestId('input_brand');
     const inputUbication = component.getByTestId('input_ubication');
     const inputLongitude = component.getByTestId('input_longitude');
     const inputLatitude = component.getByTestId('input_latitude');
     const button = component.getByRole('button', {name: /button_submit/i})

     await act(async() => {

          fireEvent.change(inputName, {
               target: {
                    value: 'du'
               }
          })

          fireEvent.change(inputCameraType, {
               target: {
                    value: ''
               }
          })

          fireEvent.change(inputModel, {
               target: {
                    value: 'dum'
               }
          })

          fireEvent.change(inputBrand, {
               target: {
                    value: 'Kod'
               }
          })

          fireEvent.change(inputUbication, {
               target: {
                    value: 'some-ubication'
               }
          })

          fireEvent.change(inputLongitude, {
               target: {
                    value: 'some-longitude'
               }
          }) 

          fireEvent.change(inputLatitude, {
               target: {
                    value: 'some-latitude'
               }
          }) 

          fireEvent.click(button)

     })

     await waitFor(() =>{
          expect(component.getByText('Too short to be a camera name')).not.toBeNull();
          expect(component.queryByText('Camera type is required')).not.toBeNull()
          expect(component.queryByText('Too showrt to be a camera brand')).not.toBeNull()
          expect(component.queryByText('Too showrt to be a camera model')).not.toBeNull()
     })
})

test('edit form', async () => {
     props.data = {
          id: '54as5d45',
          name: 'some-name',
          cameraType: '15b54df5',
          model: 'some-model',
          brand: 'some-brand',
          ubication: 'dummy-ubication',
          longitude: 'test long',
          latitude: 'some data'
     }

     const component = renderWithProviders(<CameraForm {...props}/>)
     const inputName = component.getByTestId('input_name');
     const inputCameraType = component.getByTestId('input_cameraType');
     const inputModel = component.getByTestId('input_model');
     const inputBrand = component.getByTestId('input_brand');
     const inputUbication = component.getByTestId('input_ubication');
     const inputLongitude = component.getByTestId('input_longitude');
     const inputLatitude = component.getByTestId('input_latitude');
     const button = component.getByRole('button', {name: /button_submit/i})

     await act(async() => {

          fireEvent.change(inputName, {
               target: {
                    value: 'some-name'
               }
          })

          fireEvent.change(inputCameraType, {
               target: {
                    value: '15b54df5'
               }
          })

          fireEvent.change(inputModel, {
               target: {
                    value: 'some-model'
               }
          })

          fireEvent.change(inputBrand, {
               target: {
                    value: 'some-brand'
               }
          })

          fireEvent.change(inputUbication, {
               target: {
                    value: 'dummy-ubication'
               }
          })

          fireEvent.change(inputLongitude, {
               target: {
                    value: 'test long'
               }
          }) 

          fireEvent.change(inputLatitude, {
               target: {
                    value: 'some data'
               }
          }) 

          fireEvent.click(button)

     })

     expect(props.onSubmitCamera).toHaveBeenCalled();
})