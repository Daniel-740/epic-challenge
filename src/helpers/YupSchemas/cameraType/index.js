import * as yup from "yup";

export const CameraTypeSchema = yup.object().shape({
     id: yup.string().nullable(),
     name: yup.string().required("Name required"),
     description: yup.string().required("Description required"),
   });