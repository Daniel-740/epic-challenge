import { useRef } from "react";
import { Button } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from '@mui/material/Typography';
import OutlinedInput from "@mui/material/OutlinedInput";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";

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
       <form onSubmit={handleSubmit(onSubmitCamera)}>
         <div>
           <Typography variant="h4" gutterBottom>
           Camara
           </Typography>
           <FormControl fullWidth>
             <InputLabel id="demo-simple-select-helper-label">
               Camera name
             </InputLabel>
             <Controller
               label="Name"
               defaultValue=""
               id="component-outlined"
               render={({ field }) => <OutlinedInput {...field} />}
               name="name"
               control={control}
             />
           </FormControl>
           <FormControl fullWidth>
             <InputLabel id="demo-simple-select-helper-label">
               Camera type
             </InputLabel>
             <Controller
               defaultValue=""
               render={({ field }) => (
                 <Select
                   labelId="demo-simple-select-standard-label"
                   id="demo-simple-select-standard"
                   label="Camera Type"
                   {...field}
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
                 </Select>
               )}
               name="cameraType"
               control={control}
             />
           </FormControl>
           <Button variant="contained" color="primary" type="submit">
             Add camera
           </Button>
         </div>
       </form>
     );
   };