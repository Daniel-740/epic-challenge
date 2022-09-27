import { 
  ADD_CAMERA, 
  ADD_CAMERA_TYPE, 
  DELETE_CAMERA, 
  EDIT_CAMERA_TYPE, 
  DELETE_CAMERA_TYPE,
  EDIT_CAMERA} from './actionsTypes';

import { 
  setAddCameraType, 
  setAddCamera, 
  setDeleteCamera, 
  setEditCameraType, 
  setDeleteCameraType,
  setEditCamera
 } from './functions'

const initialState = {
     cameras: [],
     cameraTypes: [],
};

const camerasReducer = (state = initialState, action) => {
     switch (action.type) {
       case ADD_CAMERA_TYPE:
         return setAddCameraType(state, action.payload);
       case EDIT_CAMERA_TYPE:
         return setEditCameraType(state, action.payload);
       case DELETE_CAMERA_TYPE:
         return setDeleteCameraType(state, action.payload);
       case ADD_CAMERA:
          return setAddCamera(state, action.payload);
       case EDIT_CAMERA:
          return setEditCamera(state, action.payload)
       case DELETE_CAMERA:
         return setDeleteCamera(state, action.payload);
       default:
         return state;
     }
   }

export default camerasReducer;