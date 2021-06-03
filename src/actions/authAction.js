import axios from 'axios'
import { returnError } from './errorAction'

import { 
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS } from '../actions/types'

export const loadUser = () => (dispatch, getState) => {
    //User loading
    dispatch({ type: USER_LOADING })

   
    axios.get('http://localhost:5000/users/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(error => {
            dispatch(returnError((error.response || {}).data, (error.response || {}).status))
            dispatch({
                type: AUTH_ERROR
            })
        }) 
}



// Register user

export const register = ({ name, email, password }) => dispatch => {
    //Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    //Req body

    const body = JSON.stringify({ name, email, password })

    axios.post('http://localhost:5000/users', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(error => {
            dispatch(returnError((error.response || {}).data, (error.response || {}).status, 'REGISTER_FAIL'))
            dispatch({
                type: REGISTER_FAIL
            })
        })
}


//Login User
export const login = ({ email, password }) => dispatch => {
    //Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    //Req body

    const body = JSON.stringify({ email, password })

    axios.post('http://localhost:5000/auth', body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(error => {
            dispatch(returnError((error.response || {}).data, (error.response || {}).status, 'LOGIN_FAIL'))
            dispatch({
                type: LOGIN_FAIL
            })
        })
}
//log out
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}
//setup config 
export const tokenConfig = getState => {
     //Get token form localhost storage
     const token = getState().auth.token
     // Header
     const config = {
         headers: {
             "Content-type": "application/json"
         }
     }
     //If token, add to headers
     if(token) {
         config.headers['x-access-token'] = token
     }
     return config
}