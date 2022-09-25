import { ADD_CAMERA, ADD_CAMERA_TYPE, DELETE_CAMERA} from './actionsTypes';

const addCameraAction = (payload) => ({
  type: ADD_CAMERA,
  payload,
});

const addCameraTypeAction = (payload) => ({
  type: ADD_CAMERA_TYPE,
  payload,
});

const deleteCameraAction = (cameraId) => ({
  type: DELETE_CAMERA,
  payload: cameraId,
});

export {addCameraAction, addCameraTypeAction, deleteCameraAction }