import React from "react";
import { CameraForm } from "../../components/camera/CameraForm";
import * as yup from "yup";

export const Camera = () => {

     const cameraSchema = yup.object().shape({
          id: yup.string().nullable(),
          name: yup
            .string()
            .min(2, "Too short to be a camera name")
            .max(240, "Too long to be a camera name")
            .required("Camera name required"),
          cameraType: yup.string().nullable(),
        });

     return <CameraForm cameraSchema={cameraSchema}/>
}