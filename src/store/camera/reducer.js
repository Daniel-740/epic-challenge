import { ADD_CAMERA, ADD_CAMERA_TYPE, DELETE_CAMERA} from './actionsTypes';
import { setAddCameraType, setAddCamera, setDeleteCamera} from './functions'

const initialState = {
     cameras: [],
     cameraTypes: [],
};

const camerasReducer = (state = initialState, action) => {
     switch (action.type) {
       case ADD_CAMERA:
         return setAddCamera(state, action.payload);
       case ADD_CAMERA_TYPE:
         return setAddCameraType(state, action.payload);
       case DELETE_CAMERA:
         return setDeleteCamera(state, action.payload);
       default:
         return state;
     }
   }

export default camerasReducer;