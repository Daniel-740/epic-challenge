import { useEffect, useState } from "react";
import { CameraTypeForm } from "../../components/cameraType/CameraTypeForm";
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from "react-redux";
import { addCameraTypeAction, editCameraTypeAction } from "../../store/camera/actions";
import { useNavigate, useParams } from 'react-router-dom';
import { CameraTypeSchema } from "../../helpers/YupSchemas/cameraType";
import { findById } from "../../helpers/fetch";

export const CameraType = () =>{

     const dispatch = useDispatch();
     const navigate = useNavigate()
     const params = useParams();
     const dataCameraTypes = useSelector(state => state.camerasReducer.cameraTypes);

     const [data, setData] = useState(null);

     const onSubmitCameraType = async (values, { setSubmitting, setErrors }) => {

          if(values.id){
               dispatch(editCameraTypeAction(values));
               navigate('/camera-types/')
          }else{
               dispatch(addCameraTypeAction(values));
               navigate('/camera-types')
          }
     };

     const getCameraTypeById = () => {
          const { id } = params;

          const response = findById(dataCameraTypes, id);

          setData(response[0]);
     }

     useEffect(() => {
          if(params && params.id) getCameraTypeById();
     }, [])

     return (
          <Container>
               <CameraTypeForm 
                    CameraTypeSchema={CameraTypeSchema}
                    onSubmitCameraType={onSubmitCameraType}
                    data={data}
               />
          </Container>
     ) 
}