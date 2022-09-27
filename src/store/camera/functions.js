import { v4 as uuidv4 } from 'uuid'

const setAddCameraType = (state, camera) => {
  let inclusionCameraType = state.cameraTypes.slice(0)
  const id = uuidv4()
  inclusionCameraType.push({
    id,
    name: camera.name,
    description: camera.description,
  })

  return {
    ...state,
    cameraTypes: inclusionCameraType,
  }
}

const setEditCameraType = (state, camera) => {

  const dataCameraType = state.cameraTypes.map(item => item);
  const index = dataCameraType.findIndex( (item ) => item.id === camera.id);

  dataCameraType[index] = camera;

  return {
    ...state,
    cameraTypes: dataCameraType,
  }
}

const setDeleteCameraType = (state, cameraTypeId) => {
  const filterCameraTypes = state.cameraTypes.filter(
    (data) => data.id !== cameraTypeId
  )
  return {
    ...state,
    cameraTypes: filterCameraTypes
  }
}

const setAddCamera = (state, camera) => {
  let inclusionCamera = state.cameras.slice(0)
  const id = uuidv4()
  inclusionCamera.push({
    id,
    name: camera.name,
    cameraType: camera.cameraType,
    model: camera.model,
    brand: camera.brand,
    ubication: camera.ubication,
    longitude: camera.longitude,
    latitude: camera.latitude
  })

  return {
    ...state,
    cameras: inclusionCamera,
  }
}

const setEditCamera = (state,camera) => {
  const dataCamera = state.cameras.map(item => item);
  const index = dataCamera.findIndex( (item ) => item.id === camera.id);

  dataCamera[index] = camera;

  return {
    ...state,
    cameras: dataCamera,
  }
}

const setDeleteCamera = (state, cameraId) => {
  const filteredCameras = state.cameras.filter(
    (camera) => camera.id !== cameraId
  )

  return {
    ...state,
    cameras: filteredCameras,
  }
}

export { 
  setAddCameraType, 
  setAddCamera, 
  setDeleteCamera, 
  setEditCameraType, 
  setDeleteCameraType,
  setEditCamera
}
