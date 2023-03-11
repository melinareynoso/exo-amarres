import { GET_ALL_NUMBERS, LOGIN_SUCCESS, LOGOUT, PSW_INCORRECT } from '../redux/actionTypes';

import axios from 'axios'

export const getAllNumbers = () => {

    return async function (dispatch){
        
        var result = await axios.get('http://localhost:3004/numbers'); 
    
        return dispatch({ 

            type: GET_ALL_NUMBERS,
            payload: result.data
            
        })                                                                                                 
    }
}


export const login = (payload) => {

    return async (dispatch) => {
        try {

            const response = await axios.post('http://localhost:3004/login', payload);
            const { token } = response.data;
            
            dispatch({
                
                type: LOGIN_SUCCESS,
                payload: { token }
                
              });

        } catch (error) {

            dispatch({
                type: PSW_INCORRECT,
                payload
                
              });

            throw new Error('Error en la petición HTTP');

            
    };
};

}



  export function logout(payload){

    return {
        type: LOGOUT,
        payload
    }
}


export const putNumber = (payload) => {

    return async () => {

        try {

            let newNumber = await axios.put('http://localhost:3004/numbers' , payload);
            
            return newNumber;

        } catch (error) {

            console.log(error)
            throw new Error('Error en la peticion put de Number', error);
            
    };
 };
};

export const postNumber = (payload) => {

    return async () => {

        try {

            let newNumber = await axios.post('http://localhost:3004/numbers' , payload);
            
            return newNumber;

        } catch (error) {

            console.log(error)
            throw new Error('Error en la peticion put de Number', error);
            
    };
 };
};




