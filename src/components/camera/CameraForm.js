import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from '@mui/material/Typography';
import { Form, Formik } from "formik";
import TextField from '@mui/material/TextField';

export const CameraForm = ({cameraSchema, onSubmitCamera, data, cameraTypes}) => {

  const renderForm = ({
     values,
     errors,
     handleChange,
     isSubmitting,
  }) => {

    return (
      
      <Form className="cameraType-form" aria-label="form"> 
        <div className="mt2">
          <Typography variant="h4" gutterBottom>
           Camera
          </Typography>
          <FormControl fullWidth className="mb2">
          <InputLabel>
               Camera name
          </InputLabel>
          <TextField
             inputProps={{ "data-testid": "input_name" }}
             error={!!errors.name}
             id="name"
             name="name"
             value={values.name}
             onChange={handleChange}
             helperText={errors.name} 
           />
          </FormControl>
          <FormControl fullWidth className="mt2 mb2">
             <InputLabel >
               Camera type
             </InputLabel>
             <TextField
                inputProps={{ "data-testid": "input_cameraType" }}
                select
                error={!!errors.cameraType}
                name="cameraType"
                id="cameraType"
                value={values.cameraType}
                onChange={handleChange}
                helperText={errors.cameraType}
              >
                <MenuItem value="">
                     <em>None</em>
                   </MenuItem>
                   {cameraTypes.map((cameraType) => (
                    
                     <MenuItem
                       key={`${cameraType.id}`}
                       value={cameraType.id}
                     >{`${cameraType.name} - ${cameraType.description}`}</MenuItem>
                   ))}
              </TextField>
           </FormControl>

          <FormControl fullWidth className="mb2">
            <InputLabel >
               Camera model
             </InputLabel>
            <TextField
              inputProps={{ "data-testid": "input_model" }}
              error={!!errors.model}
              id="model"
              name="model"
              value={values.model}
              onChange={handleChange}
              helperText={errors.model} 
            />
          </FormControl>
          <FormControl fullWidth className="mb2">
            <InputLabel >
               Camera brand
             </InputLabel>
            <TextField
              inputProps={{ "data-testid": "input_brand" }}
              error={!!errors.brand}
              id="brand"
              name="brand"
              value={values.brand}
              onChange={handleChange}
              helperText={errors.brand} 
            />
          </FormControl>
          <FormControl fullWidth className="mb2">
            <InputLabel >
               Ubication
             </InputLabel>
            <TextField
              inputProps={{ "data-testid": "input_ubication" }}
              id="ubication"
              name="ubication"
              value={values.ubication}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl fullWidth className="mb2">
            <InputLabel >
               Longitude
             </InputLabel>
            <TextField
              inputProps={{ "data-testid": "input_longitude" }}
              id="longitude"
              name="longitude"
              value={values.longitude}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl fullWidth className="mb2">
            <InputLabel >
               Latitude
             </InputLabel>
            <TextField
              inputProps={{ "data-testid": "input_latitude" }}
              id="latitude"
              name="latitude"
              value={values.latitude}
              onChange={handleChange}
            />
          </FormControl>
          <Button
            aria-label="button_submit"
            className="submit-button"
            color="primary"
            disabled={isSubmitting}
            type="submit"
            variant="contained"
          >
            { !data ? 'Add Camera' : 'Edit Camera' }
          </Button>
        </div>
      </Form>
    );
  };

  const getFormikProps = () => {
    const { name, 
        cameraType, 
        id, 
        model, 
        brand,
        longitude,
        latitude,
        ubication
      } = { ...data };

    return {
      children: renderForm,
      enableReinitialize: true,
      initialValues: {
        id,
        name: name || "",
        cameraType: cameraType || '',
        model: model || "",
        brand: brand || "",
        ubication: ubication || "",
        latitude: latitude || "",
        longitude: longitude || ""
      },
      onSubmit: onSubmitCamera,
      validationSchema: cameraSchema
    };
  };

  return <Formik {...getFormikProps()} />;
};
