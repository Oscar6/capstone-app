import axios from 'axios';

export const signup = (formProps, callback) => async dispatch => {
    try{
        const response = await axios.post(
            '/signup',
            formProps
        );
    dispatch({type: 'AUTH_USER', payload: response.data.token})
    localStorage.setItem('token', response.data.token)
    callback()
    }
    catch (e){
        dispatch({type: 'AUTH_ERROR', payload: "Email in use"})
    }
}

export const signin = (formProps, callback) => async dispatch => {
    try{
        const response = await axios.post(
            '/signin', formProps
        )
        dispatch({type: 'AUTH_USER', payload: response.data.token})
        localStorage.setItem('token', response.data.token)
        callback()
    }
    catch(e){
        dispatch({type: 'AUTH_ERROR', payload: "Invalid login credentials"})
    }
}

export const signout = () =>{
    localStorage.removeItem('token')
    return {
        type: 'AUTH_USER',
        payload: 'Succesfully logged out'
    }
}