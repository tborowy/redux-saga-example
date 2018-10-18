import { combineReducers } from 'redux';



function userReducer(state = 0, action = null) {
  switch (action.type) {
    case 'USERS':
      console.log(action);
      return state+1;
    default:
      return state;
  }
}


function errorReducer(state = null, action = null) {
  switch (action.type) {
    case 'ERROR':
      console.log(action);
      return action.payload;
    default:
      return state;
  }
}





const rootReducer = combineReducers({
  users: userReducer,
  error: errorReducer
});

export default rootReducer;