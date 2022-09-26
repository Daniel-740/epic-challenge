import {useState, useEffect} from 'react';
import { CameraTypeList } from "../../components/cameraType/CameraTypeList"
import { useSelector, useDispatch } from "react-redux";
import { filterSearch } from '../../helpers/filterSearch';
/* import { ModalCameraTypes } from '../../components/modals/modalCameraTypes'; */
import { useNavigate } from 'react-router-dom';
import { deleteCameraTypeAction } from "../../store/camera/actions";

export const CameraTypes = () => {

     const cameraTypes = useSelector(state => state.camerasReducer.cameraTypes)
     const navigate = useNavigate()
     const dispatch = useDispatch();

     const [searched, setSearched] = useState('');
     const [dataTable, setDataTable] = useState(cameraTypes);
     const [open, setOpen] = useState(false);

     const requestSearch = (searchedVal) => {

          const dataFilter = filterSearch(searchedVal, cameraTypes, 'cameraTypes');
          setDataTable(dataFilter);
     };

     // Cancel seach bar
     const cancelSearch = () => {
          setSearched("");
          requestSearch(searched);
        };

     const onDelete = (id) => {
          dispatch(deleteCameraTypeAction(id))
          setDataTable(dataTable.filter(data => data.id !== id));
     }

     return(
          <>
               <CameraTypeList 
                    cancelSearch={cancelSearch} 
                    requestSearch={requestSearch} 
                    data={dataTable} 
                    searched={searched}
                    setOpen={setOpen}
                    navigate={navigate}
                    onDelete={onDelete}
               />
      {/*          <ModalCameraTypes open={open} setOpen={setOpen}/> */}
          </>
     )
}
