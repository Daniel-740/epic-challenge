import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './containers/home'
import { Camera } from './containers/camera';
import { Cameras } from './containers/cameras';
import { CameraType } from './containers/cameraType';
import { CameraTypes } from './containers/cameraTypes'
import { Menu } from './containers/menu'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/camera" element={<Camera />} />
          <Route  path="/cameras" element={<Cameras />} />
          <Route  path="/camera-type" element={<CameraType />} />
          <Route  path="/camera-types" element={<CameraTypes />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
