import axios from 'axios'

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ERROR = 'ERROR'
export const FETCH_DATA = "FETCH_DATA"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"

export const fetchData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data)
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data}) 
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err})
    })
}




export const ADD_SMURF = 'ADD_SMURF';
export const ADDING_SMURF = 'ADDING_SMURF'

export const addSmurf = smurf => {
  const newSmurf = axios.post('http://localhost:3333/smurfs', smurf)
  return dispatch => {
    dispatch({type: ADDING_SMURF})
    newSmurf
    .then (({data}) => {
      dispatch({ type: ADD_SMURF, payload: data})
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err})
    })
  }
}





/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
