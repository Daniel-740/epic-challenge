import { ADD_CAMERA,
   ADD_CAMERA_TYPE, 
   DELETE_CAMERA, 
   EDIT_CAMERA_TYPE,
   DELETE_CAMERA_TYPE,
   EDIT_CAMERA
  } from './actionsTypes';

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

const addCameraAction = (payload) => ({
  type: ADD_CAMERA,
  payload,
});

const editCameraAction = (payload) => ({
  type: EDIT_CAMERA,
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
  deleteCameraTypeAction,
  editCameraAction,
}