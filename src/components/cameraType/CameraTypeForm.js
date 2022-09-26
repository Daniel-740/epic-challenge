import FormControl from "@material-ui/core/FormControl";
import Typography from '@mui/material/Typography';
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { Form, Formik } from "formik";

export const CameraTypeForm = ({CameraTypeSchema, onSubmitCameraType, data}) => {

     const renderForm = ({
        values,
        errors,
        handleChange,
        isSubmitting,
     }) => {

       return (
      
         <Form className="cameraType-form"> 
           <div className="mt2">
             <Typography variant="h4" gutterBottom>
              Types of cameras
             </Typography>
             <FormControl fullWidth className="mb2">
             <TextField
                error={!!errors.name}
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                helperText={errors.name} 
              />
             </FormControl>
             <FormControl fullWidth className="mb2">

             <TextField
                error={!!errors.description}
                id="description"
                name="description"
                value={values.description}
                onChange={handleChange}
                helperText={errors.description} 
              />
             </FormControl>
             <Button
               className="submit-button"
               color="primary"
               disabled={isSubmitting}
               type="submit"
               variant="contained"
             >
               { !data ? 'Add Camera type' : 'Edit Camera Type' }
             </Button>
           </div>
         </Form>
       );
     };
   
     const getFormikProps = () => {
       const { name, description, id } = { ...data };
   
       return {
         children: renderForm,
         enableReinitialize: true,
         initialValues: {
           id,
           name: name || "",
           description: description || "",
         },
         onSubmit: onSubmitCameraType,
         validationSchema: CameraTypeSchema,
       };
     };
   
     return <Formik {...getFormikProps()} />;
   };