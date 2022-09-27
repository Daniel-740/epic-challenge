import { createStore, combineReducers} from 'redux';
import camerasReducer from './camera/reducer'


const rootReducer = combineReducers({
     camerasReducer,
});
   
const store = createStore(rootReducer);

export default store;