import { ADD_CAMERA,
   ADD_CAMERA_TYPE, 
   DELETE_CAMERA, 
   EDIT_CAMERA_TYPE,
   DELETE_CAMERA_TYPE
  } from './actionsTypes';

const addCameraAction = (payload) => ({
  type: ADD_CAMERA,
  payload,
});

const addCameraTypeAction = (payload) => ({
  type: ADD_CAMERA_TYPE,
  payload,
});

const editCameraTypeAction = (payload) => ({
  type: EDIT_CAMERA_TYPE,
  payload
})

const deleteCameraTypeAction = (payload) => ({
  type: DELETE_CAMERA_TYPE,
  payload,
})

const deleteCameraAction = (cameraId) => ({
  type: DELETE_CAMERA,
  payload: cameraId,
});

export {
  addCameraAction, 
  addCameraTypeAction, 
  deleteCameraAction,
  editCameraTypeAction,
  deleteCameraTypeAction
}