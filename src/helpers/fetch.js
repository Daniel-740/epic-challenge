
export const findById = (arrayMain, id) => arrayMain.filter( data => data.id === id);

export const checkRelationCameraType = (arrayMain, id) => {
     const response = arrayMain.find(data => data.cameraType === id);

     return response;
}