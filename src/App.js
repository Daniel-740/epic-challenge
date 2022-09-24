import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { Component, useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Table from "@material-ui/core/Table";
import FormControl from "@material-ui/core/FormControl";
import { connect, useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Typography from '@mui/material/Typography';
import TableHead from "@material-ui/core/TableHead";
import OutlinedInput from "@mui/material/OutlinedInput";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@material-ui/core/Paper";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import { Field, Form, Formik } from "formik";
import { Button, ButtonGroup } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const ADD_CAMERA = "ADD_CAMERA";
const ADD_CAMERA_TYPE = "ADD_CAMERA_TYPE";
const DELETE_CAMERA = "DELETE_CAMERA";

const addCameraAction = (payload) => ({
  type: ADD_CAMERA,
  payload,
});

const addCameraTypeAction = (payload) => ({
  type: ADD_CAMERA_TYPE,
  payload,
});

const deleteCameraAction = (cameraId) => ({
  type: DELETE_CAMERA,
  payload: cameraId,
});

const initialState = {
  cameras: [],
  cameraTypes: [],
};

const setAddCameraType = (state, camera) => {
  let inclusionCameraType = state.cameraTypes.slice(0);
  const id = uuidv4();
  inclusionCameraType.push({
    id,
    name: camera.name,
    description: camera.description,
  });

  return {
    ...state,
    cameraTypes: inclusionCameraType,
  };
};
const setAddCamera = (state, camera) => {
  let inclusionCamera = state.cameras.slice(0);
  const id = uuidv4();
  inclusionCamera.push({
    id,
    name: camera.name,
    cameraType: camera.cameraType,
  });

  return {
    ...state,
    cameras: inclusionCamera,
  };
};

const setDeleteCamera = (state, cameraId) => {
  const filteredCameras = state.cameras.filter(
    (camera) => camera.id !== cameraId
  );

  return {
    ...state,
    cameras: filteredCameras,
  };
};

function camerasReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CAMERA:
      return setAddCamera(state, action.payload);
    case ADD_CAMERA_TYPE:
      return setAddCameraType(state, action.payload);
    case DELETE_CAMERA:
      return setDeleteCamera(state, action.payload);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  camerasReducer,
});

const store = createStore(rootReducer);

const CameraTypeSchema = yup.object().shape({
  id: yup.string().nullable(),
  name: yup.string().required("Name required"),
  description: yup.string().required("Description required"),
});

export const cameraSchema = yup.object().shape({
  id: yup.string().nullable(),
  name: yup
    .string()
    .min(2, "Too short to be a camera name")
    .max(240, "Too long to be a camera name")
    .required("Camera name required"),
  cameraType: yup.string().nullable(),
});

const CameraTypeForm = () => {
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

const CameraForm = () => {
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

class List extends Component {
  handleDelete = (id) => {
    this.props.deleteCameraAction(id);
  };
  render() {
    const { cameras } = this.props;

    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Camera Type</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cameras.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.cameraType}
                </TableCell>
                <TableCell component="th" scope="row">
                  <ButtonGroup
                    color="primary"
                    aria-label="outlined primary button group"
                  >
                    <Button variant="contained">
                      <EditIcon />
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => this.handleDelete(row.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  cameras: state.camerasReducer.cameras,
});

const mapDispatchToProps = {
  deleteCameraAction,
};

const CamerasList = connect(mapStateToProps, mapDispatchToProps)(List);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CameraTypeForm />
        <CameraForm />
        <CamerasList />
      </div>
    </Provider>
  );
}

export default App;
