import { combineReducers } from 'redux';
import { GET_RANDOM_CAT, GET_RANDOM_CAT_ERROR, RANDOM_CAT } from "./actions/actionsList";



function catReducer(state = {loading: false}, action = null) {
  switch (action.type) {
    case RANDOM_CAT:
      return {...action.payload, loading:false, error: null};
    case GET_RANDOM_CAT:
      return {...state, loading:true};
    case GET_RANDOM_CAT_ERROR:
      return {...state, loading:false, error: {message: action.payload.message, stack: action.payload.stack}};
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  cat: catReducer
});

export default rootReducer;