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
  let inclusionCameraType = state.cameraTypes.map((data) => {
    if (data.id === camera.id) {
      data.name = camera.name || data.name
      data.description = camera.description || data.description
    }

    return data
  })

  return {
    ...state,
    cameraTypes: inclusionCameraType,
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
  })

  return {
    ...state,
    cameras: inclusionCamera,
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
  setDeleteCameraType
}
