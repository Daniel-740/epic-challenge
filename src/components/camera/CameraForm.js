import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from '@mui/material/TextField';


import { addCameraAction } from "../../store/camera/actions";

export const CameraForm = ({cameraSchema}) => {

     const dispatch = useDispatch();
     const { control, handleSubmit } = useForm({
       mode: "onBlur",
       resolver: yupResolver(cameraSchema),
     });

     const cameraTypes = useSelector((state) => state.camerasReducer.cameraTypes);
   
     const onSubmitCamera = async (data) => {
       dispatch(addCameraAction(data));
     };
     return (
       <form onSubmit={handleSubmit(onSubmitCamera)} className="mt2">
         <div>
           <Typography variant="h4" gutterBottom>
           Camara
           </Typography>
           <FormControl fullWidth>
             <InputLabel id="demo-simple-select-helper-label">
               Camera name
             </InputLabel>
             <TextField
/*                 error */
                id="outlined-error-helper-text"
                defaultValue="test camera"
/*                 helperText="error" */
              />
           </FormControl>
           <FormControl fullWidth className="mt2 mb2">
             <InputLabel id="demo-simple-select-helper-label" >
               Camera type
             </InputLabel>
             <TextField
                id="outlined-select-currency"
                select
                label="Select"
/*                 value={currency}
                onChange={handleChange} */
                helperText="Please select your type camera"
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
           <Button variant="contained" color="primary" type="submit" className="mt2">
             Add camera
           </Button>
         </div>
       </form>
     );
   };