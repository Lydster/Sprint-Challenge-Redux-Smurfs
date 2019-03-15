/*
  Be sure to import in all of the action types from `../actions`
*/
import {ERROR, FETCH_DATA, FETCH_DATA_SUCCESS, ADD_SMURF, ADDING_SMURF} from '../actions'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */

 const initialState = {
    smurfs: [],
    fetchingData: false,
    addingSmurf: false,
    error: null
 }
 
 function reducer(state = initialState, action) {
   switch(action.type) {
     
    case FETCH_DATA:
      return {
        ...state, 
       fetchingData: true
      }

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        smurfs: action.payload, fetchingData: false
      }

    case ADDING_SMURF:
      return {
        ...state, 
        addingSmurf: true
      }

    case ADD_SMURF:
      return {
        ...state, 
        smurfs: action.payload, addingSmurf: false
      }

    case ERROR:
      return {
        ...state,
        fetchingData: false,
        addingSmurf: false,
        error: action.payload
      }
      
     default:
      return state;
   }
 }
export default reducer;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
