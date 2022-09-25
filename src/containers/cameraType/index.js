import { CameraTypeForm } from "../../components/cameraType/CameraTypeForm";
import * as yup from "yup";

export const CameraType = () =>{

     const CameraTypeSchema = yup.object().shape({
          id: yup.string().nullable(),
          name: yup.string().required("Name required"),
          description: yup.string().required("Description required"),
        });

     return <CameraTypeForm CameraTypeSchema={CameraTypeSchema}/>
}