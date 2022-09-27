import * as yup from 'yup'

export const cameraSchema = yup.object().shape({
  id: yup.string().nullable(),
  name: yup
    .string()
    .test('minLenght', 'Too short to be a camera name', val =>  !val || (val.toString().length > 2))
    .test('maxLenght', 'Too long to be a camera name', val => !val || (val.toString().length < 240))
    .required('Camera name required'),
  cameraType: yup.string().nullable().required('Camera type is required'),
  brand: yup
    .string()
    .test('minLenght', 'Too showrt to be a camera brand', val => !val || (val.toString().length > 5))
    .test('maxLenght', 'Too long to be a camera brand', val => !val || (val.toString().length < 75)),
  model: yup
    .string()
    .test('minLenght', 'Too showrt to be a camera model', val => !val || (val.toString().length > 5))
    .test('maxLenght', 'Too long to be a camera model', val => !val || (val.toString().length < 75)),
  ubication: yup.string(),
  longitude: yup.string(),
  latitude: yup.string(),
})
