import {useState} from 'react';
import { CameraTypeList } from "../../components/cameraType/CameraTypeList"
import { useSelector, useDispatch } from "react-redux";
import { filterSearch } from '../../helpers/filterSearch';
import { useNavigate } from 'react-router-dom';
import { deleteCameraTypeAction } from "../../store/camera/actions";
import { deleteAlert, checkAlert } from '../../components/alerts';
import { checkRelationCameraType } from '../../helpers/fetch';

export const CameraTypes = () => {

     const cameraTypes = useSelector(state => state.camerasReducer.cameraTypes)
     const camerasArray = useSelector(state => state.camerasReducer.cameras)
     const navigate = useNavigate()
     const dispatch = useDispatch();

     const [searched, setSearched] = useState('');
     const [dataTable, setDataTable] = useState(cameraTypes);

     const requestSearch = (searchedVal) => {

          const dataFilter = filterSearch(searchedVal, cameraTypes, 'cameraTypes');
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

               const resp = checkRelationCameraType(camerasArray, id);

               if(!resp) {
                    dispatch(deleteCameraTypeAction(id))
                    setDataTable(dataTable.filter(data => data.id !== id));
               }else{
                    checkAlert(resp);
               }
          }
     }

     return(
          <>
               <CameraTypeList 
                    cancelSearch={cancelSearch} 
                    requestSearch={requestSearch} 
                    data={dataTable} 
                    searched={searched}
                    navigate={navigate}
                    onDelete={onDelete}
               />
          </>
     )
}
