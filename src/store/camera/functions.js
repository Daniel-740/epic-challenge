import { v4 as uuidv4 } from "uuid";

const setAddCameraType = (state, camera) => {
     let inclusionCameraType = state.cameraTypes.slice(0);
     const id = uuidv4();
     inclusionCameraType.push({
       id,
       name: camera.name,
       description: camera.description,
     });
   
     return {
       ...state,
       cameraTypes: inclusionCameraType,
     };
   };

   const setAddCamera = (state, camera) => {
     let inclusionCamera = state.cameras.slice(0);
     const id = uuidv4();
     inclusionCamera.push({
       id,
       name: camera.name,
       cameraType: camera.cameraType,
     });
   
     return {
       ...state,
       cameras: inclusionCamera,
     };
   };
   
   const setDeleteCamera = (state, cameraId) => {
     const filteredCameras = state.cameras.filter(
       (camera) => camera.id !== cameraId
     );
   
     return {
       ...state,
       cameras: filteredCameras,
     };
   };

export { setAddCameraType, setAddCamera, setDeleteCamera }