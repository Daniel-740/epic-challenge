import {useEffect, useState} from 'react'
import { CameraForm } from '../../components/camera/CameraForm'
import Container from '@mui/material/Container'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { cameraSchema } from '../../helpers/YupSchemas/camera'
import { addAlert, editAlert } from '../../components/alerts'
import { addCameraAction, editCameraAction} from '../../store/camera/actions'
import { findById } from "../../helpers/fetch";

export const Camera = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const cameras = useSelector((state) => state.camerasReducer.cameras);
  const cameraTypes = useSelector(state => state.camerasReducer.cameraTypes);

  const [data, setData] = useState(null);

  const onSubmitCamera = async (values, { setSubmitting, setErrors }) => {
    if (values.id) {
       dispatch(editCameraAction(values)) 
      await editAlert()
      navigate('/cameras')
    } else {
      dispatch(addCameraAction(values))
      await addAlert()
      navigate('/cameras')
    }
  }

  const getCameraTypeById = () => {
    const { id } = params;

    const response = findById(cameras, id);

    setData(response[0]);
}

  useEffect(() => {
      if(params && params.id) getCameraTypeById();
  }, [])

  return (
    <Container>
      <CameraForm
        cameraSchema={cameraSchema}
        cameraTypes={cameraTypes}
        onSubmitCamera={onSubmitCamera}
        data={data}
      />
    </Container>
  )
}
