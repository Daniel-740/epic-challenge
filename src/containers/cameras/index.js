import {useState} from 'react'
import {CamerasList} from '../../components/camera/CamerasList';
import { useSelector, useDispatch } from "react-redux";
import { deleteAlert } from '../../components/alerts';
import { deleteCameraAction } from "../../store/camera/actions";
import { filterSearch } from '../../helpers/filterSearch';
import { useNavigate } from 'react-router-dom';

export const Cameras = () => {

     const dispatch = useDispatch();
     const navigate = useNavigate()
     const cameras = useSelector(state => state.camerasReducer.cameras);
     const cameraTypes = useSelector(state => state.camerasReducer.cameraTypes);

     const [searched, setSearched] = useState('');
     const [dataTable, setDataTable] = useState(cameras);

     const requestSearch = (searchedVal) => {

          const dataFilter = filterSearch(searchedVal, cameras, 'cameras');
          setDataTable(dataFilter);
     };

     // Cancel seach bar
     const cancelSearch = () => {
          setSearched("");
          requestSearch(searched);
        };

     const onDelete = async (id) => {

          const alert = await deleteAlert();

          if(alert){
               dispatch(deleteCameraAction(id))
               setDataTable(dataTable.filter(data => data.id !== id));
          }
     }

     return <CamerasList 
               cancelSearch={cancelSearch} 
               requestSearch={requestSearch} 
               data={dataTable} 
               searched={searched}
               navigate={navigate}
               onDelete={onDelete}
               cameraTypes={cameraTypes}
          />
}