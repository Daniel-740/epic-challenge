import { useRef } from "react";
import FormControl from "@material-ui/core/FormControl";
import Typography from '@mui/material/Typography';
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import { addCameraTypeAction } from "../../store/camera/actions";

export const CameraTypeForm = ({CameraTypeSchema}) => {
     const dispatch = useDispatch();
     const type = {};
     const formRef = useRef(null);
     const renderForm = (formik) => {
       return (
         <Form className="cameraType-form">
           <div>
             <Typography variant="h4" gutterBottom>
             Tipo de Camara
             </Typography>
             <FormControl fullWidth>
               <Field
                 required
                 component={TextField}
                 value={formik.values.name}
                 onChange={(event) => {
                   formik.setFieldValue("name", event.target.value);
                 }}
                 id="outlined-required"
                 label="Name"
                 name="name"
               />
             </FormControl>
             <FormControl fullWidth>
               <Field
                 id="outlined-helperText"
                 component={TextField}
                 onChange={(event) => {
                   formik.setFieldValue("description", event.target.value);
                 }}
                 value={formik.values.description}
                 label="Description"
                 name="description"
                 multiline
                 maxRows={4}
               />
             </FormControl>
             <Button
               className="submit-button"
               color="primary"
               disabled={formik.isSubmitting}
               type="submit"
               variant="contained"
             >
               Add Camera type
             </Button>
           </div>
         </Form>
       );
     };
     const onSubmitCameraType = async (values, { setSubmitting, setErrors }) => {
       dispatch(addCameraTypeAction(values));
     };
   
     const getFormikProps = () => {
       const { name, description } = { ...type };
   
       return {
         children: renderForm,
         enableReinitialize: true,
         initialValues: {
           name: name || "",
           description: description || "",
         },
         onSubmit: onSubmitCameraType,
         validationSchema: CameraTypeSchema,
       };
     };
   
     return <Formik {...getFormikProps()} innerRef={formRef} />;
   };